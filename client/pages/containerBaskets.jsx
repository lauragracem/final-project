import React, { useState } from 'react';
import ContainerBaskets from '../components/containerBaskets';
import BlueBaskets from '../components/blue-baskets';
import YellowBaskets from '../components/yellow-baskets';
import PeachBaskets from '../components/peach-baskets';
import Colors from '../components/colorChoices';
import BackArrow from '../components/backArrow';

export default function Baskets(props) {

  const [color, setColor] = useState('green');

  return (
    <div style={{ height: '100vh' }} className="container d-flex flex-column justify-content-center align-items-center my-1">
      <Colors setColor={setColor}/>
      {color === 'green' && <ContainerBaskets />}
      {color === 'blue' && <BlueBaskets />}
      {color === 'yellow' && <YellowBaskets />}
      {color === 'peach' && <PeachBaskets />}
      <BackArrow/>
    </div>
  );
}
