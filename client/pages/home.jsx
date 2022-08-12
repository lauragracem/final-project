import React from 'react';
import Box from '../components/box';
import Jar from '../components/jar';
import Basket from '../components/basket';
import Backpack from '../components/backpack';
import { useNavigate } from 'react-router-dom';

const styles = {
  cursor: {
    cursor: 'pointer'
  },
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="container" style={styles.container}>
      <div className="row d-flex flex-xs-column flex-md-row">
        <div className="col-xs-12 col-md-3 d-flex align-items-end justify-content-end justify-content-md-center">
          <div className="mx-5" style={styles.cursor} onClick={() => navigate('/containerBoxes')}>
            <Box />
          </div>
        </div>
        <div className="col-xs-12 col-md-3 d-flex align-items-end justify-content-md-center">
          <div className="mx-5" style={styles.cursor} onClick={() => navigate('/containerJars')}>
            <Jar />
          </div>
        </div>
        <div className="col-xs-12 col-md-3 d-flex align-items-end justify-content-end justify-content-md-center">
          <div className="mx-5" style={styles.cursor} onClick={() => navigate('/containerBaskets')}>
            <Basket />
          </div>
        </div>
        <div className="col-xs-12 col-md-3 d-flex align-items-end justify-content-md-center">
          <div className="mx-5" style={styles.cursor} onClick={() => navigate('/containerBackpacks')}>
            <Backpack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
