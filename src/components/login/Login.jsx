import { toast } from 'react-toastify';
import './login.css'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import upload from '../../lib/upload';


const Login=()=> {
    const[avatar,setAvatar]=useState({
        file:null,
        url:""
    })

    const handleAvatar=e=>{
        if(e.target.files[0]){
        setAvatar({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        })
    }
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);
      
        try {
          await signInWithEmailAndPassword(auth, email, password);
          toast.success("Logged in successfully!");
        } catch (err) {
          console.log(err);
          toast.error(err.message);
        }
      };

      const handleRegister = async (e) => {
        e.preventDefault();
      
        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData);
      
        if (!username || !email || !password) {
          toast.error("All fields are required!");
          return;
        }
      
        try {
          const res = await createUserWithEmailAndPassword(auth, email, password);
          console.log("User registered successfully:", res.user.uid);
      
          let imgUrl = "";
          if (avatar?.file) {
            imgUrl = await upload(avatar.file);
            console.log("Avatar uploaded successfully:", imgUrl);
          }
      
          await setDoc(doc(db, "users", res.user.uid), {
            username,
            email,
            avatar: imgUrl,
            id: res.user.uid,
            blocked: [],
          });
          console.log("User document created successfully");
      
          await setDoc(doc(db, "userchats", res.user.uid), {
            chats: [],
          });
          console.log("User chats document initialized");
      
          toast.success("Account created! You can login now");
        } catch (err) {
          console.error("Error during registration:", err.message);
          toast.error(err.message);
        }
      };
      
    

  return (
    <div className='login'>
        
        <div className="item">
            <h2>Welcome back</h2>
            
            <form onSubmit={handleLogin}>
                <input type="text" placeholder='Email' name='email'></input>
                <input type="password" placeholder='Password' name='password'></input>
                <button type="submit">Login</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
        <h2>Create an Account</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor="file" >
                   <img src={avatar.url || "./avatar.png"} alt='' /> 
                    Upload an image</label>
                <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}></input>
                <input type="text" placeholder='Username' name='username'></input>
                <input type="text" placeholder='Email' name='email'></input>
                <input type="password" placeholder='Password' name='password'></input>
                <button type="submit">Sign up</button>
            </form>
        </div>
       
    </div>
  )
}
export default Login