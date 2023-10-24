import { useState } from "react";
import { useNavigate ,Link} from "react-router-dom"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"




function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    navigate("/");

    } catch (err) {
      setErr(true);
      console.log(err)
    }
  }
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form action="" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Sign In</button>
        </form>
        <p>Do not have an account?<Link to="/register"> Sign Up</Link></p>
        {err && <span>Something went wrong</span>}
      </div>
    </div>
  );
  }

export default Login;
