import React from 'react';
// import Home from './pages/home';
import { parseRoute } from './lib';
// import ContainerSubTypes from './pages/containerJars';
import ContainerBoxes from './pages/containerBoxes';
// import ContainerBaskets from './components/containerBaskets';
// import ContainerBackpacks from './components/containerBackpacks';

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
    return <ContainerBoxes />;
  }
}
