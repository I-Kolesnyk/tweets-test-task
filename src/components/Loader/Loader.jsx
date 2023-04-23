import { Hearts } from 'react-loader-spinner';

import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <Hearts color="#471ca9"/>
    </StyledLoader>
  );
};

export default Loader;