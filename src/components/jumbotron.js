import React from 'react';

export class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron" >
        <h1 className="text-center">Theme example</h1>
        <p className="text-center">
            This is a template showcasing the optional theme stylesheet included in Bootstrap.
            Use it as a starting point to create something more unique by building on or modifying it.
        </p>

          <button style={{marginLeft:'30px', backgroundColor: 'blue', padding:'10px', color:'white'}}> Jumbotron dugme</button>
          Neki tekst koji je povecan
      </div>
    )
  }
}
