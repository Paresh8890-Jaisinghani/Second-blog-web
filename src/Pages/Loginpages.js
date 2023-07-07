import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";



const Loginpages = () => {
    const [username,setusername] = React.useState('');
    const [password,setpassword] = React.useState('');
    const [redirect,setredirect] = React.useState(false);
    const {setUserInfo} = useContext(UserContext);
 async function login(ev){
  ev.preventDefault();
 const response =  await fetch('http://localhost:4000/login',{
    method :'POST',
    body : JSON.stringify({username,password}),
    headers : {'Content-Type':'application/json'},
    credentials : 'include',
  });
  if(response.ok){
 
  response.json().then(userInfo =>{
setUserInfo(userInfo);
    setredirect(true);

  });
  }
  else{
    alert('wrong credentials');
  }
}

if(redirect){
  return <Navigate to={'/'}/>
}




  
    return (
      <div className="login-page">
        <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form className="login" onSubmit={login} >
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Enter user name" id="username" required
        value={username}
        onChange ={ev => setusername(ev.target.value)}
        
        />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" required
        value={password}
        onChange = {ev => setpassword(ev.target.value)}
        
        />
        <button className="button"><span>Log In</span></button>
      
    </form>
      </div>
    );
  };





      /* //   <form className="login">
      //   <h1>Login</h1>
      //   <input type="text"
      //     placeholder="username"
      //   />
      //   <input type="password"
      //     placeholder="password"
      //   />
      //   <button>Login</button>
      // </form> */
  


export default Loginpages;