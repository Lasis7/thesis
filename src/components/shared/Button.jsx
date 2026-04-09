const Button = ({ className, buttonType, text }) => {
  return (
    <button className={className} type={buttonType}>
      {text}
    </button>
  );
};

export default Button;
