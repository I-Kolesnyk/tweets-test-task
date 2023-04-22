import { LinkButton } from "./NavButton.styled";

function NavButton({ children, path }) {
  return <LinkButton to={path}>{children}</LinkButton>;
}

export default NavButton;
