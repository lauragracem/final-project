import React from 'react';

const style = {
  display: 'flex',
  flexDirection: 'column',
  align: 'center',
  marginTop: '2rem'
};

export default function ContainerJars(props) {
  return [
    <img key="first" style={style} src="images/green-jar-1.png"></img>,
    <img key="second" style={style} src="images/green-jar-2.png"></img>,
    <img key="third" style={style} src="images/green-jar-3.png"></img>
  ];
}
