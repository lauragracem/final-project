import React from 'react';
import Home from './pages/home';
// import ContainerSubTypes from './pages/containerJars';
import ContainerBoxes from './pages/containerBoxes';
// import ContainerBaskets from './components/containerBaskets';
// import ContainerBackpacks from './components/containerBackpacks';
import { HashRouter, Route, Routes } from 'react-router-dom';

// import UploadContainerForm from '.pages/uploadcontainerform';
// import UploadItemsForm from '.pages/uploaditemsform';
// import UploadImages from '.pages/uploadimages';
export default function App() {

  return (
    <HashRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={<Home />}
        />
        <Route
          exact
          path='/containerBoxes'
          element={<ContainerBoxes />}
        />
      </Routes>
    </HashRouter>
  );

}
