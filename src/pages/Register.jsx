import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

function Register() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    const display_Name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    console.log(display_Name);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, display_Name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          // res.user.displayName = displayName;
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log(res.user);
            await updateProfile(res.user,
              {
                displayName:display_Name,
                photoURL: downloadURL,
              });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              display_Name,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userchats", res.user.uid), {});
            navigate("/")
          });
        }
      );
    } catch (err) {
      setErr(true);
      console.log(err)
    }
  }
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {/* <input type="file" id="file" /> */}
          <label htmlFor="images" className="drop-container" id="dropcontainer">
            <input type="file" id="images" accept="image/*" required />
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Already have account?<Link to="/login"> Log in</Link></p>
      </div>
    </div>
  );
}

export default Register;
