import * as React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const Home: React.SFC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h3>Welcome</h3>
      <p>Check out these awesome features</p>
    </div>
  );
};

export default {
  component: styled(Home)`
    text-align: center;
    margin-top: 200px;
  `,
};
