import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { fetchUsers } from '../actions';
import { Store } from 'redux';
import { Helmet } from 'react-helmet';
import { ThunkActionCreator } from '../../types.d'

interface Props {
  fetchUsers: ThunkActionCreator<User[]>;
  users: User[];
}

class UsersList extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
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

export default {
  loadData: ({ dispatch }: Store<User[]>) => dispatch(fetchUsers()),
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
};
