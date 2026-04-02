import {
  backgroundColorClassNames,
  primaryColorClassNames,
} from "../theme/data";

const themeReducer = (state, action) => {
  if (primaryColorClassNames.includes(action.type)) {
    return { ...state, primary: action.type };
  }

  if (backgroundColorClassNames.includes(action.type)) {
    return { ...state, background: action.type };
  }

  return state;
};

export default themeReducer;
