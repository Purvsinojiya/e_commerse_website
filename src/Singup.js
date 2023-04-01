import React,{useState} from 'react'

import {useHistory} from 'react-router-dom';
import "./singup.css"

function Singup() {
    const history=useHistory() ;
   
  const [user,setUser] = useState({
    name:"",password:"",number:"",password:""
  });
  let name,value;

  const handleInputs = (e) =>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
 
    setUser({...user, [name]:value});
  }
  const PostData = async (e) =>{
    e.preventDefault();
    const {name,password,number,email} = user;

  const res =await fetch('/register',{
    method: "Post",
    headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name,password,number,email})
  })
  const data=await res.json();
  if(data.status === 422 || !data)
  {
    window.alert("Invalid registration")
    console.log("Invalid Registration")
  }
  else{
    window.alert("success")
    console.log("success")
history.push("/home");
  }
}
  return (
    <div>
   <div
          className="open1"
          style={{
            height: "750px",
            width: "100%",
            backgroundImage: `url("https://img.freepik.com/premium-photo/top-view-online-shopping-concept-with-credit-card-smart-phone-computer-isolated-office-yellow-table-background_315337-3559.jpg")`,
            backgroundSize: "100% 100%",
            zIndex: "-1",
            position: "relative",
            backgroundCovered: "cover",
            filter: "blur(5px)",
          }}
        ></div>
    <form className='ty' method="POST">
    <div className="signup">
    <div id='pf'>
    <div className='name1'>Register</div>
    <label for="uname">Username</label><br/>
    <input  className='o' type="text" name="name"  id='name' autocomplete="off" value={user.name} placeholder="Enter Username" onChange={handleInputs} required/><br/>
    <label for="psw">Password</label><br/>
    <input  className='o' type="password" name="password" id='password' autocomplete="off" value={user.password} placeholder="Enter Password"  onChange={handleInputs} required/><br/>
    <label for="uname">number</label><br/>
    <input className='o' type="number" name="number"  id='name' autocomplete="off" value={user.number} placeholder="Enter Username" onChange={handleInputs} required/><br/>
    <label for="uname">email</label><br/>
    <input className='o' type="text" name="email"  id='name' autocomplete="off" value={user.email} placeholder="Enter Username" onChange={handleInputs} required/><br/>
    <input  className='j' type="submit" onClick={PostData} required/>
    </div>
    </div>
    </form>
   
 
    </div>
  )
}

export default Singup
