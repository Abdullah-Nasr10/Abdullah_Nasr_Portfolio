import "./Button.css";
interface ButtonProps {
  btnText: string;
  btnIcon?: React.ElementType;
}
function Button({ btnText, btnIcon: BtnIcon }: ButtonProps) {
  return (
    <button className="customBtn">
      <span className="btnText">{btnText}</span>
      {/* <i className="btnIcon center fa-regular fa-paper-plane"></i> */}
      {BtnIcon && (
        <div className="btnIcon center">
          <BtnIcon />
        </div>
      )}
    </button>
  );
}

export default Button;
