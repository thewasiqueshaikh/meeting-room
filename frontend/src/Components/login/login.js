import React from 'react'
// import '../login/login.css';
const Login = () => {
return(   
    <>
       <div>
          <h1>Login Page</h1>
          <br/>
          <table>
          <tr> 
          <td>       
          <label htmlFor="email">Email: </label></td>
          <td>
          <input type="text" name = "email" placeholder='Enter Email'/></td>
          </tr>
          <tr>
              <td>
          <label htmlFor="password">Password: </label></td>
          <td>
          <input type="text" name = "password" placeholder='Enter Password'/>
          </td>
          </tr>
          <tr>
              <td colSpan={2}>
                  <input type="submit" name="submit" value="Submit"/>
              </td>
          </tr>
          </table>
      </div> 
    </>
  )
}

export default Login