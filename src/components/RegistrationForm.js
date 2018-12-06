import React from 'react';

class RegistrationForm extends React.component{
  render(){
    return(
      <div>
        <form>
          <input type="text" />
          <input type="password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm;
