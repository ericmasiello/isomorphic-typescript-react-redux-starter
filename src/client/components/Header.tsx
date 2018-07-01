import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Logo from './Logo';
import { HeaderList, HeaderListItem } from './HeaderList';

interface Props {
  auth: Auth;
  className?: string;
}

const HeaderWrapper = styled.div`
  position: relative;
  height: 100%;
`;

HeaderWrapper.displayName = 'HeaderWrapper';

export const Header: React.SFC<Props> = ({ auth, className }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <nav className={className}>
      <HeaderWrapper>
        <Logo to="/">
          React SSR
        </Logo>
        <HeaderList className="right">
          <HeaderListItem>
            <Link to="/users">Users</Link>
          </HeaderListItem>
          <HeaderListItem>
            <Link to="/admins">Admins</Link>
          </HeaderListItem>
          <HeaderListItem>{authButton}</HeaderListItem>
        </HeaderList>
      </HeaderWrapper>
    </nav>
  );
};

function mapStateToProps({ auth }: Props) {
  return { auth };
}

export default connect(mapStateToProps)(styled(Header)`
  color: #fff;
  background-color: #ee6e73;
  width: 100%;
  height: 56px;
  line-height: 56px;

  @media only screen and (min-width: 601px) {
    height: 64px;
    line-height: 64px;
  }
`);
