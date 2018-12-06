import React from 'react';
import FillerText from './components/FillerText';

class Webpage extends React.component{
  render(){
    return(
      <div>
        <p>The world coolest webpage</p>
        <FillerText/>
        <FillerText/>
      </div>
    );
  }
}

export default Webpage;
