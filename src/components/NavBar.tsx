// src/components/NavBar.tsx
"use client";  // Mark the component as a Client Component

import * as React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useRouter } from 'next/navigation'; // Use next/navigation for App Router
import { useSession, signOut } from 'next-auth/react'; // Import useSession and signOut

const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter(); // Use the new App Router hook
  const { data: session } = useSession(); // Get the session data

  // Handle navigation
  const handleNavigation = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    // Use the router to navigate between pages
    switch (newValue) {
      case 0:
        router.push('/'); // Home
        break;
      case 1:
        router.push('/profil'); // Profile
        break;
      case 2:
        router.push('/prispevok'); // Posts
        break;
      case 3:
        if (!session) {
          router.push('/auth/prihlasenie'); // Sign In
        } else {
          signOut(); // Sign Out if already signed in
        }
        break;
      case 4:
        router.push('/auth/registracia'); // Sign Up
        break;  
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleNavigation}
      showLabels
      sx={{ position: 'fixed', bottom: 0, width: '100%' }}
    >
      <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
      <BottomNavigationAction label="Profily" icon={<SearchIcon />} />
      <BottomNavigationAction label="Prispevky" icon={<AddCircleIcon />} />
      
      {session ? (
        [
          <BottomNavigationAction 
            key="profil" 
            label="Profil" 
            icon={<AccountCircleIcon />} 
            onClick={() => router.push('/profil')} 
          />,
          <BottomNavigationAction 
            key="odhlasit" 
            label="Odhlásiť" 
            icon={<HowToRegIcon />} 
            onClick={signOut} 
          />
        ]
      ) : (
        [
          <BottomNavigationAction 
            key="prihlasenie" 
            label="Prihlasenie" 
            icon={<AccountCircleIcon />} 
            onClick={() => router.push('/auth/prihlasenie')} 
          />,
          <BottomNavigationAction 
            key="registracia" 
            label="Registracia" 
            icon={<HowToRegIcon />} 
            onClick={() => router.push('/auth/registracia')} 
          />
        ]
      )}
    </BottomNavigation>
  );
};

export default NavBar;
