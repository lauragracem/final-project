import React from 'react';
import Home from './pages/home';
import { parseRoute } from './lib';
// import ContainerSubTypes from './pages/containersubtypes';
// import Containers from './pages/containers';
// import ContainerSubTypes from './pages/containerSubTypes';
// import UploadContainerForm from '.pages/uploadcontainerform';
// import UploadItemsForm from '.pages/uploaditemsform';
// import UploadImages from '.pages/uploadimages';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', e => {
      const hashChange = parseRoute(window.location.hash);
      this.setState({ route: hashChange });
    });
  }

  render() {
    return <Home />;
  }
}
