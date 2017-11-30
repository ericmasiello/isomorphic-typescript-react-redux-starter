import * as React from 'react';

const Home: React.SFC<{}> = () => {
  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      <h3>Welcome</h3>
      <p>Check out these awesome features</p>
    </div>
  );
};

export default {
  component: Home,
};
