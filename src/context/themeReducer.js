const themeReducer = (state, action) => {
  switch (action.type) {
    case "color-1":
    case "color-2":
    case "color-3":
    case "color-4":
    case "color-5":
    case "color-6":
      return { ...state, primary: action.type };
    case "bg-1":
    case "bg-2":
      return { ...state, background: action.type };
    default:
      return state;
  }
};

export default themeReducer;
