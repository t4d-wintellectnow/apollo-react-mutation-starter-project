import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { WidgetTable } from './components';

const APP_QUERY = gql`
  query App {
    widgets {
      id
      name
      description
      color
      size
      price
      quantity
    }
  }
`;

export class App extends React.Component {

  render() {
    return <Query query={APP_QUERY}>
      {({ loading, error, data }) => {

        if (loading) return 'Loading...';
        if (error) return 'Error...';

        return <WidgetTable widgets={data.widgets} />;
      }}
    </Query>;
  }
}
