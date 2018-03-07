import React,{Component} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

 class APP extends Component {

    render() {
        console.log(this.props)
        return (
            <div className="class-name">
                content
            </div>
        );
    }
}

const query = gql
`{
  members{
      title
    }
}
`;

export default graphql(query)(APP)
