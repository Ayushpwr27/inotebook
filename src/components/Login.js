import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Login = (props) => {

    const [credentials, setCredentials] = useState({email:"",password:""})
    let Navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                'content-Type':'application/json' 
            },
            body : JSON.stringify({ email:credentials.email, password :credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // redirect
            localStorage.setItem('token',json.authtoken);
            props.showAlert("Account created successfully","success")
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
        <div className='mt-2'>
        <h2>Login to Continue to iNotebook</h2>
            <form  onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={onChange} name="email" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={onChange} name="password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login