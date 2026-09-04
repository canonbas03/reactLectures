import { log } from "../../log.js";
import { ComponentPropsWithoutRef, ElementType, ReactNode, memo } from "react";

type IconButtonProps = {
  children: ReactNode;
  icon: ElementType;
} & ComponentPropsWithoutRef<"button">;

const IconButton = memo(function IconButton({ children, icon, ...props }: IconButtonProps) {
  log("<IconButton /> rendered", 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});
export default IconButton;
