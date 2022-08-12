import React from 'react';
import Box from '../components/box';
import Jar from '../components/jar';
import Basket from '../components/basket';
import Backpack from '../components/backpack';
import { useNavigate } from 'react-router-dom';

const basketStyle = {
  marginRight: '4rem'
};
const boxStyle = {
  marginRight: '4rem'
};

const jar = {
  marginLeft: '4rem'
};

const backpackStyle = {
  marginTop: '-2rem',
  marginLeft: '4rem'
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
        <div className="column-2 jar d-flex flex-column" style={jar}>
          <Jar />
          <button onClick={() => navigate('/containerJars')}id="home-jar">Make a Jar</button>
        </div>
      </div>
      <div className="row d-flex ml-auto ml-md-0">
        <div className="column-2 basket d-flex flex-column" style={basketStyle}>
            <Basket />
            <button onClick={() => navigate('/containerBaskets')}id="home-basket">Make a Basket</button>
          </div>
        </div>
      <div className="row d-flex">
        <div className="column-2 backpack d-flex flex-column" style={backpackStyle}>
            <Backpack />
            <button onClick={() => navigate('/containerBackpacks')}id="home-backpack">Make a Backpack</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
