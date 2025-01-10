"use client"; // Add this line

import { signIn } from 'next-auth/react';
import { Button, Typography, Container, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google'; // Google icon import

const SignIn = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "30vh",
        padding: 2,
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '16px' }}>
        Prihláste sa
      </Typography>

      <Button
        variant="contained"
        onClick={() => signIn('google')}
        sx={{
          marginBottom: '16px',
          width: '100%',
          maxWidth: 400,
          fontSize: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px 24px', // Add more padding for a larger button
          backgroundColor: '#4285F4', // Google blue color
          borderRadius: '30px', // Rounded corners
          fontWeight: 'bold', // Make text bold
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
          textTransform: 'none', // Prevent text from being uppercase
          transition: 'background-color 0.3s, transform 0.2s', // Smooth transitions
          '&:hover': {
            backgroundColor: '#357ae8', // Darker blue on hover
            transform: 'scale(1.05)', // Slightly enlarge the button on hover
          },
        }}
      >
        <GoogleIcon sx={{ marginRight: '8px' }} />
        Prihláste sa
      </Button>

      <Typography variant="body1" sx={{ marginBottom: '16px' }}>
        Ešte nemáte účet?{' '}
        <Link href="/auth/registracia" sx={{ fontWeight: 'bold' }}>
          Registrujte sa
        </Link>
      </Typography>
    </Container>
  );
};

export default SignIn;
