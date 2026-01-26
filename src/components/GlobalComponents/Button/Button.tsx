import "./Button.css";
interface ButtonProps {
  btnText: string;
  btnIcon?: React.ElementType;
  href?: string;
}
function Button({ btnText, btnIcon: BtnIcon, href }: ButtonProps) {
  return (
    <a href={href} className="customBtn">
      <span className="btnText">{btnText}</span>
      {/* <i className="btnIcon center fa-regular fa-paper-plane"></i> */}
      {BtnIcon && (
        <div className="btnIcon center">
          <BtnIcon />
        </div>
      )}
    </a>
  );
}

export default Button;
