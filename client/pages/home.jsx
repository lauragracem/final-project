import React from 'react';
import Box from '../components/box';
import Jar from '../components/jar';
import Basket from '../components/basket';
import Backpack from '../components/backpack';
import { useNavigate } from 'react-router-dom';

const boxStyle = {
  justifyContent: 'flex-end',
  align: 'center',
  marginRight: '1rem',
  marginTop: '1rem'
};

const basketStyle = {
  justifyContent: 'flex-end',
  marginRight: '1.5rem'
};

const backpackStyle = {
  marginLeft: '1.5rem',
  marginTop: '-0.5rem'
};

const Home = () => {

  const navigate = useNavigate();

  return (
      <div className="container">
        <div className="row">
          <div style={boxStyle} className="column-2 box">
            <td align='center'>
              <Box />
              <td>
                <button onClick={() => navigate('/containerBoxes')} id="home-box">Build a Box</button>
              </td>
            </td>
          </div>
        </div>
        <div className="row">
          <div className="column-2 jar">
            <td>
              <Jar />
              <td>
              <button onClick={() => navigate('/containerJars')}id="home-jar">Make a Jar</button>
              </td>
            </td>
          </div>
        </div>
        <div className="row">
          <div style={basketStyle} className="column-2">
          <td align='center'>
              <Basket />
              <td>
              <button onClick={() => navigate('/containerBaskets')}id="home-basket">Make a Basket</button>
              </td>
            </td>
          </div>
        </div>
        <div className="row">
          <div style={backpackStyle} className="column-2">
          <td align='center'>
              <Backpack />
              <td>
              <button onClick={() => navigate('/containerBackpacks')}id="home-backpack">Make a Backpack</button>
              </td>
          </td>
        </div>
      </div>
    </div>
  );
};

export default Home;
