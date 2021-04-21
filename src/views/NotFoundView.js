import { Component } from 'react';

class NotFoundView extends Component {
  componentDidMount() {
    this.props.history.replace(this.props.match.url);
  }
  render() {
    return null;
  }
}

export default NotFoundView;
