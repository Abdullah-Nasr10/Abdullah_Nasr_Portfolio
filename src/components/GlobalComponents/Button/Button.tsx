import "./Button.css";
interface ButtonProps {
  btnText: string;
  btnIcon?: React.ElementType;
  href?: string;
  download?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}
function Button({
  btnText,
  btnIcon: BtnIcon,
  href,
  download,
  type,
  onClick,
  disabled,
}: ButtonProps) {
  // If href exists, render as link
  if (href) {
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

  // Otherwise render as button
  return (
    <button
      type={type || "button"}
      className="customBtn"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="btnText">{btnText}</span>
      {BtnIcon && (
        <div className="btnIcon center">
          <BtnIcon />
        </div>
      )}
    </button>
  );
}

export default Button;
