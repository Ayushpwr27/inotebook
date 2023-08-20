import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Signup = (props) => {

    const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassward:""})
    let Navigate = useNavigate();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {name,email,password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
            'content-Type':'application/json' 
        },
        body : JSON.stringify({ name, email, password})
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      props.showAlert("Successfully Logged in","success")
      localStorage.setItem('token',json.authtoken);
      Navigate("/");
    }
    else{
      props.showAlert("Invalid Credentials","danger")
    }
}

const onChange=(e)=>{
  setCredentials({...credentials,[e.target.name]:e.target.value})
}



  return (
    <div className='container'>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name='name' id="name" onChange={onChange} />
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" name='email' id="email" onChange={onChange}/>
        </div>
        <div className="col-md-12">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" email='password' name='password' id="password" required minLength={5} onChange={onChange}/>
        </div>
        <div className="col-md-12">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name='cpassword' required minLength={5} onChange={onChange}/>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup