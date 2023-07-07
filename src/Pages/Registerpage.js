import React from "react";

const Registerpage = () => {

const [username,setusername] = React.useState("");
const [password,setpassword] = React.useState("");


async function register(ev){
  ev.preventDefault();



  const response = await fetch('http://localhost:4000/register', {
     method : 'POST',
     body : JSON.stringify({username,password}),
     headers : {'Content-Type' : 'application/json'},
   });

   if(response.status === 200 ){
    alert('Registration successful');
   }
   else{
    alert('Registration failed');
   }


}


  return (
    <div className="register-page">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form className="register" onSubmit={register} >
        <h3>Register Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Enter user name" id="username" required 
        value={username}
        onChange = {ev => setusername(ev.target.value)}
        />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" required 
        value={password}
        onChange = {ev => setpassword(ev.target.value)}
        />

        <button className="button"><span>Register Now</span></button>
       
    </form>
    </div>
  );
};





export default Registerpage;



