import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

//Creating homepage as a fucntional component because we do not need to store state and we dont need any lifecycle methods.
const HomePage = () => (
  <div className='homepage'>
    <Directory className='' />
  </div>
);

export default HomePage;
