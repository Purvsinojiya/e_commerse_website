import React,{useState} from 'react'
import Prenavbar from './Prenavbar';
import {useHistory} from 'react-router-dom';
function Register() {
   
  return (
    <div>
       <Prenavbar />
     bbmmbmbmbmbmmb
    </div>
  )
}

export default Register
// const history=useHistory() ;
// const [user,setUser] = useState({
//     name:"",password:"",number:"",email:""
//   });
//   let name,value;

//   const handleInputs = (e) =>{
//     console.log(e);
//     name=e.target.name;
//     value=e.target.value;
 
//     setUser({...user, [name]:value});
//   }
//   const PostData = async (e) =>{
//     e.preventDefault();
//     const {name,password,number,email} = user;
//     const res =await fetch("/login",{
//         method: "Post",
//         headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         name,password})
//       })
//       const data=await res.json();
//       if(data.status === 422 || !data)
//       {
//         window.alert("Invalid registration")
//         console.log("Invalid Registration")
//       }
//       else{
//         window.alert("success")
//         console.log("success")
//     history.push("/home");
//       }
//     }
{/* <input type="text" name="name"  id='name' autocomplete="off" value={user.name} placeholder="Enter Username" onChange={handleInputs} required/>
    <label for="psw"><b>Password</b></label>
    <input type="password" name="password" id='password' autocomplete="off" value={user.password} placeholder="Enter Password"  onChange={handleInputs} required/>
    <label for="uname"><b>number</b></label>
    <input type="text" name="number"  id='name' autocomplete="off" value={user.number} placeholder="Enter Username" onChange={handleInputs} required/>
    <label for="uname"><b>email</b></label>
    <input type="text" name="email"  id='name' autocomplete="off" value={user.email} placeholder="Enter Username" onChange={handleInputs} required/>
    <input type="submit" onClick={PostData} required/> */}
    //   <form method="POST">
    //    <label for="uname"><b>Username</b></label>
    //    nnnnnnnnnnnnnnnnnnnnn
    
    //    </form>