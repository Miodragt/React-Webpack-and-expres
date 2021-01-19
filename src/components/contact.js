import React from 'react';

export class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1 className="page-header">Contact Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
            , sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.</p>
          <form action="http://127.0.0.1:80/process_post" method="POST">
              First Name: <input type="text" name="first_name"/>  <br/>
                  Last Name: <input type="text" name="last_name"/>
                  <input type="submit" value="Submit"/>
          </form>
      </div>

    )
  }
}
