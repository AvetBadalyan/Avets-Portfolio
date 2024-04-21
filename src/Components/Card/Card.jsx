import "./Card.scss";

const Card = ({ children, className, onClick }) => {
  return (
    <article className={`card ${className}`} onClick={onClick}>
      {children}
    </article>
  );
};

export default Card;
