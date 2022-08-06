import React from 'react';

const style = {
  display: 'flex',
  justifyContent: 'center'
};

export default function ContainerBoxes(props) {
  return [
    <img key="first" style={style} src="images/green-box.png"></img>,
    <img key="second" style={style} src="images/green-lunch.png"></img>
  ];

}
