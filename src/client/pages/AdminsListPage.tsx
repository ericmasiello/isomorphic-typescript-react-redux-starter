import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from 'redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

interface Props {
  fetchAdmins: () => (dispatch: any, getState: any, api: any) => Promise<void>;
  admins: User[];
}

class AdminsListPage extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }: AppState) {
  return { admins };
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData: ({ dispatch }: Store<any>) => dispatch(fetchAdmins())
};