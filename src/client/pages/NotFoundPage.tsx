import * as React from 'react';

interface Props {
  staticContext: {
    notFound?: boolean; 
  };
}

const NotFoundPage: React.SFC<Props> = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Ooops, route not found.</h1>;
};

export default {
  component: NotFoundPage
};
