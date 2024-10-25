// src/app/auth/registracia/page.tsx

"use client"; // Add this line

import { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <Container>
      <Typography variant="h4">Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button 
          variant="contained" 
          type="submit"
          sx={{ marginTop: '16px' }}
        >
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;