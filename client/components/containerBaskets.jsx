import React from 'react';

const style = {
  display: 'flex',
  justifyContent: 'center'
};

export default function ContainerBaskets(props) {
  return [
    <img key="first" style={style} src="images/green-basket-1.png"></img>,
    <img key="second" style={style} src="images/green-basket-2.png"></img>
  ];
}
