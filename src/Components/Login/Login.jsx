import React,{useContext} from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { auth , provider} from '../../Config/firebase';
import { UserContext } from '../../Context';

function Login() {

  const { state , dispatch } = useContext(UserContext);

  const signIn = () => {
      auth.signInWithPopup(provider)
          .then(res =>{
            console.log(res);
            dispatch({
              type: 'SET_USER',
              user : res.user
            })
          })
          .catch(err => {
            alert(err.message)
          })
  }

  return (
    <div className='login'>
        <div className="login-container">
            <img src={'https://cdn.dribbble.com/users/121337/screenshots/5885287/slack.png?compress=1&resize=400x300'}
             alt = 'slack image' />
             <h1>Welcome to Slack Clone</h1>
             <Button onClick={signIn}>Sign In with Google</Button>
        </div>
    </div>
  )
}

export default Login