import { useEffect, useState } from "react";
import "./LinkButton.css";

type LinkButtonProps = {
  href: string;
  icon: string;
  iconLight?: string; // optional
  label: string;
};

function LinkButton({ href, icon, iconLight, label }: LinkButtonProps) {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkTheme = () =>
      document.documentElement.classList.contains("light-mode");
    setIsLightMode(checkTheme());

    if (!iconLight) return; // only observe if we care about iconLight

    const observer = new MutationObserver(() => {
      setIsLightMode(checkTheme());
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [iconLight]);

  const displayedIcon = iconLight && isLightMode ? iconLight : icon;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
    >
      <img
        src={displayedIcon}
        alt={`${label}-logga`}
        className="link-button-icon"
      />
      <span className="link-button-label">{label}</span>
    </a>
  );
}

export default LinkButton;
