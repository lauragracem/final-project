import React from 'react';
import Box from '../components/box';
import Jar from '../components/jar';
import Basket from '../components/basket';
import Backpack from '../components/backpack';
// import mediaScreen from '../components/mediaCss';

const homeStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'flex-end'
};

const boxStyle = {
  justifyContent: 'flex-end',
  align: 'center'
  // marginRight: '1rem',
  // marginTop: '1rem'
};

const jarStyle = {
  // marginLeft: '1.5rem'
};

const basketStyle = {
  justifyContent: 'flex-end'
  // marginRight: '1.5rem'
};

const backpackStyle = {
  // marginLeft: '1.5rem',
  // marginTop: '-0.5rem'
};

export default function Home(props) {
  return (
      <div style={homeStyle} className="container">
        <div style={rowStyle} className="row">
          <div style={boxStyle} className="column-2 box">
            <td align='center'>
              <Box />
              <td>
                <button onClick="">Build a Box</button>
              </td>
            </td>
          </div>
        </div>
        <div className="row">
          <div style={jarStyle} className="column-2 jar">
            <td align='center'>
              <Jar />
              <td>
                <button>Make a Jar</button>
              </td>
            </td>
          </div>
        </div>
      <div style={rowStyle} className="row">
          <div style={basketStyle} className="column-2">
          <td align='center'>
              <Basket />
              <td>
                <button>Make a Basket</button>
              </td>
            </td>
          </div>
        </div>
        <div className="row">
          <div style={backpackStyle} className="column-2">
          <td align='center'>
              <Backpack />
              <td>
                <button>Make a Backpack</button>
              </td>
            </td>
          </div>
        </div>
      </div>
  );

}
