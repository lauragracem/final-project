import React from 'react';
import Box from '../components/box';
import Jar from '../components/jar';
import Basket from '../components/basket';
import Backpack from '../components/backpack';

const homeStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'flex-end'
};

const boxStyle = {
  justifyContent: 'flex-end'
};

const basketStyle = {
  justifyContent: 'flex-end'
};

export default function Home(props) {
  return (
      <div style={homeStyle} className="container">
        <div style={rowStyle} className="row">
          <div style={boxStyle} className="column-2 box">
            <td>
              <Box />
              <td>
                <button>Build a Box</button>
              </td>
            </td>
          </div>
        </div>
        <div className="row">
          <div className="column-2 jar">
            <td>
              <Jar />
              <td>
                <button>Make a Jar</button>
              </td>
            </td>
          </div>
        </div>
      <div style={rowStyle} className="row">
          <div style={basketStyle} className="column-2">
            <td>
              <Basket />
              <td>
                <button>Make a Basket</button>
              </td>
            </td>
          </div>
        </div>
        <div className="row">
          <div className="column-2">
            <td>
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
