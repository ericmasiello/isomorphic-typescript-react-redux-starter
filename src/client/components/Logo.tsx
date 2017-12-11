import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled(Link)`
  position: absolute;
  color: #fff;
  display: inline-block;
  font-size: 2.1rem;
  padding: 0;

  @media only screen and (max-width: 992px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

Logo.displayName = 'Logo';

export default Logo;
