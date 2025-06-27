import "./LinkButton.css";

type LinkButtonProps = {
  href: string;
  icon: string;
  label: string;
};

function LinkButton({ href, icon, label }: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
    >
      <img src={icon} alt={`${label}-ikon`} className="link-button-icon" />
      <span className="link-button-label">{label}</span>
    </a>
  );
}
export default LinkButton;
