import PropTypes from "prop-types";

import { LinkButton } from "./NavButton.styled";

function NavButton({ children, path }) {
  return <LinkButton to={path}>{children}</LinkButton>;
}

NavButton.propTypes = {
  children: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavButton;
