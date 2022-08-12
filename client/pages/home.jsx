import React from 'react';
import Box from '../components/box';
import Jar from '../components/jar';
import Basket from '../components/basket';
import Backpack from '../components/backpack';
import { useNavigate } from 'react-router-dom';

const basketStyle = {
  marginRight: '2rem'
};
const boxStyle = {
  marginRight: '2rem',
  marginTop: '1rem'
};

const jar = {
  marginLeft: '2rem'
};

const backpackStyle = {
  marginLeft: '2rem',
  marginTop: '-2rem'
};

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column flex-md-row mt-md-5 justify-content-md-around">
      <div className="row d-flex ml-auto ml-md-0">
        <div className="column-2 box d-flex flex-column" style={boxStyle} onClick={() => navigate('/containerBoxes')}>
            <Box />
        </div>
      </div>
      <div className="row d-flex">
        <div className="column-2 jar d-flex flex-column" style={jar} onClick={() => navigate('/containerJars')}>
          <Jar />
        </div>
      </div>
      <div className="row d-flex ml-auto ml-md-0">
        <div className="column-2 basket d-flex flex-column" style={basketStyle} onClick={() => navigate('/containerBaskets')}>
            <Basket />
          </div>
        </div>
      <div className="row d-flex">
        <div className="column-2 backpack d-flex flex-column" style={backpackStyle} onClick={() => navigate('/containerBackpacks')}>
            <Backpack />
        </div>
      </div>
    </div>
  );
};

export default Home;
