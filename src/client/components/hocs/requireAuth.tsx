import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

interface RequireAuthProps {
  auth: Auth;
}

const requireAuthHOC: RequireAuthHOC = (ChildComponent) => {
  class RequireAuth extends React.Component<RequireAuthProps, {}> {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <div>Loading...</div>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  function mapStateToProps({ auth }: AppState) {
    return { auth };
  }

  return connect(mapStateToProps)(RequireAuth);
};

export default requireAuthHOC;
