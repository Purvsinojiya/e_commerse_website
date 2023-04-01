import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import './login.css'
import { Link } from 'react-router-dom';
 

function Login() {
  const history=useHistory() ;
   
  const [user,setUser] = useState({
    name:"",password:""
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
    const {name,password} = user;

  const res =await fetch("/login",{
    method: "Post",
    headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name,password})
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
          className="open"
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
    <div className='container3'>

       <form method="POST">
       <div className='name1'>Login</div>
    <label  id='t'for="uname">Username</label>
    <input type="text" className='k' name="name"  id='name' autocomplete="off" value={user.name} placeholder="Enter Username" onChange={handleInputs} required/>

    <label  id='c'for="psw">Password</label>
    <input type="password" className='k' name="password" id='password' autocomplete="off" value={user.password} placeholder="Enter Password"  onChange={handleInputs} required/>
        <div className='pw'>
    <input  className='w' type="submit" onClick={PostData} required/>
    </div>
    <Link to='/Singup' className='up'>click here to sign up</Link>
      </form>
      </div>
    </div>
  )
}

export default Login
{/* <button onClick={() =>{
  navigate.push('/address')
  }}>BUY</button> */}