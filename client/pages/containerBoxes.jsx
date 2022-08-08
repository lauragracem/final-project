import React from 'react';
import ContainerBoxes from '../components/containerBoxes';

const style = {
  display: 'flex',
  justifyContent: 'center',
  align: 'center'
};

export default function containers(props) {
  return (
    <div style={style} className="container">
      <ContainerBoxes />
    </div>
  );

}
