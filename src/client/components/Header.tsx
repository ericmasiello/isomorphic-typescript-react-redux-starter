import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Logo from './Logo';
import { HeaderList, HeaderListItem } from './HeaderList';
import * as bgImage from '../images/background.jpg';

interface Props {
  auth: Auth;
  className?: string;
}

export const Header: React.SFC<Props> = ({ auth, className }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <nav className={className}>
      <Logo to="/">
        Starter App
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
    </nav>
  );
};

function mapStateToProps({ auth }: Props) {
  return { auth };
}

export default connect(mapStateToProps)(styled(Header)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImage});
  background-size: cover;
  width: 100%;
  min-height: 56px;

  @media only screen and (min-width: 601px) {
    min-height: 100px;
  }
`);
