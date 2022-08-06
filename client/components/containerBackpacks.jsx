import React from 'react';

const style = {
  display: 'flex',
  justifyContent: 'center'
};

export default function ContainerBackpacks(props) {
  return [
    <img key="first" style={style} src="images/green-backpack-1.png"></img>,
    <img key="second" style={style} src="images/green-backpack-2.png"></img>
  ];
}
