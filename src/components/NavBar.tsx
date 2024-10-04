// src/components/NavBar.tsx
"use client";  // Mark the component as a Client Component
import * as React from 'react';
import { BottomNavigation, BottomNavigationAction} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router for App Router

const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter(); // Use the new App Router hook

  // Handle navigation
  const handleNavigation = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    // Use the router to navigate between pages
    switch (newValue) {
      case 0:
        router.push('/'); // Home
        break;
      case 1:
        router.push('/profil'); // Search
        break;
      case 2:
        router.push('/prispevok'); // Notifications
        break;
      case 3:
        router.push('/auth/prihlasenie'); // Profile
        break;
      case 4:
        router.push('/auth/registracia'); // Profile
        break;  
      default:
        break;
    }
  };

  return (
    <BottomNavigation value={value} onChange={handleNavigation} showLabels sx={{ position : 'fixed', bottom : 0 , width : '100%'}}>
      <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
      <BottomNavigationAction label="Profily" icon={<SearchIcon />} />
      <BottomNavigationAction label="Prispevky" icon={<AddCircleIcon />} />
      <BottomNavigationAction label="Prihlasenie" icon={<AccountCircleIcon />} />
      <BottomNavigationAction label="Registracia" icon={<HowToRegIcon />} />
    </BottomNavigation>
  );
};

export default NavBar;
