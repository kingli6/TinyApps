import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword,signOut } from "firebase/auth";
import  {auth}  from "../../firebase-config";

const LoginSignup = () => {

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setloginEmail] = useState('');
  const [loginPassword, setloginPassword] = useState('');

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, user => {
    setUser(user);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  const logout = async () => {
    await signOut(auth);
  }

  return (
    <div>
      <div>
        <h3>Register User</h3>
        <input placeholder="Email..."
          onChange={(event) => setRegisterEmail(event.target.value)}
        />
        <input placeholder="Password..."
          onChange={(event) => setRegisterPassword(event.target.value)}
        />

        <button onClick={register}>Create User</button>
      </div>

      <div>
        <h3>Login</h3>
        <input placeholder="Email..."
          onChange={(event) => setloginEmail(event.target.value)}
        />
        <input placeholder="Password..."
          onChange={(event) => setloginPassword(event.target.value)}
        />

        <button onClick={login}>Login</button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out</button>
    </div>
  )
}

export default LoginSignup
