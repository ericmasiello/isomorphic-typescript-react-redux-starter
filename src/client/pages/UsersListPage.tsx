import * as React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Store } from 'redux';
import { Helmet } from 'react-helmet';

interface Props {
  fetchUsers: () => (dispatch: any, getState: any, api: any) => Promise<void>;
  users: User[];
}

class UsersList extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        Here's a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return { users: state.users };
}

function loadData(store: Store<any>) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
};
