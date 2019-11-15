import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

//Creating homepage as a fucntional component because we do not need to store state and we dont need any lifecycle methods.
const HomePage = () => (
  <div className='homepage'>
    <Directory />
  </div>
);

export default HomePage;
