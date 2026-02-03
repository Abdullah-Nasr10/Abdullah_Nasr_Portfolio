import "./Button.css";
interface ButtonProps {
  btnText: string;
  btnIcon?: React.ElementType;
  href?: string;
  download?: string;
}
function Button({ btnText, btnIcon: BtnIcon, href, download }: ButtonProps) {
  return (
    <a href={href} className="customBtn" download={download}>
      <span className="btnText">{btnText}</span>
      {BtnIcon && (
        <div className="btnIcon center">
          <BtnIcon />
        </div>
      )}
    </a>
  );
}

export default Button;
