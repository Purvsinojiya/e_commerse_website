import React,{useState} from 'react'
import "./system.css"
import {useHistory} from 'react-router-dom';

function System() {
    const history=useHistory() ;
   
  const [user,setUser] = useState({
    name:"",email:"",Address:"",number:"",city:"",Pincode:"",Quienty:""
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
    const {name,email,Address,number,city,Pincode,Quienty} = user;

  const res =await fetch('/order',{
    method: "Post",
    headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name,email,Address,number,city,Pincode,Quienty})
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
history.push("/Payment");
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
    <form  className='purchase'method="POST">
    <div className='name1'>Purchase Page</div>
    <label for="uname" className='hii'>Name</label>
    <input className='name2' type="text" name="name"  id='name' autocomplete="off" value={user.name} placeholder="Enter Username" onChange={handleInputs} required/>
    <label for="psw" className='hii'>Email</label>
    <input className='name2' type="text" name="email" id='password' autocomplete="off" value={user.email} placeholder="Enter Password"  onChange={handleInputs} required/>
    <label for="uname" className='hii'>Address</label>
    <input className='name2' type="text" name="Address"  id='name' autocomplete="off" value={user.Address} placeholder="Enter Username" onChange={handleInputs} required/>
    <label for="uname" className='hii'>Phone</label>
    <input  className='name2' type="text" name="number"  id='name' autocomplete="off" value={user.number} placeholder="Enter Username" onChange={handleInputs} required/>
    <label for="uname" className='hii'>Czzity</label>
    <input className='name2' type="text" name="city"  id='name' autocomplete="off" value={user.city} placeholder="Enter Username" onChange={handleInputs} required/>
    <label for="uname" className='hii'>Pincode</label>
    <input className='name2' type="text" name="Pincode"  id='name' autocomplete="off" value={user.Pincode} placeholder="Enter Username" onChange={handleInputs} required/>
    <label for="uname" className='hii'>Quantity(in kg)</label>
    <input className='name2' type="text" name="Quienty"  id='name' autocomplete="off" value={user.Quienty} placeholder="Enter Username" onChange={handleInputs} required/>
    <input className='pp' type="submit" onClick={PostData} required/>
    
    </form>
    
    </div>
  )
}

export default System
