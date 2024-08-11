'use client'
import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { TextField, Button, Box, Typography } from '@mui/material';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
   
    <Box display="flex" flexDirection="column" width={'35%'} alignItems="center" p={3} border={'0.5px solid black'}>
     <Typography variant='h4' padding={'20px'}>
      Welcome to MediGuide
     </Typography>
     
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
        padding={"10px"}
      />
      <Button variant="contained" onClick={handleAuth} sx={{marginTop: '20px', marginBottom: '20px'}}>
        {isLogin ? 'Login' : 'Sign Up'}
      </Button>
      <Button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
      </Button>
    </Box>
  );
}
