"use client";

import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useRouter } from 'next/navigation'; // Use App Router hook
import { useSession, signOut } from 'next-auth/react'; // Import useSession and signOut

const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  const handleNavigation = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/'); // Home
        break;
      case 1:
        router.push('/prispevok'); // Posts
        break;
      case 2:
        router.push('/profil'); // Profile
        break;
      case 3:
        if (!session) {
          router.push('/auth/prihlasenie'); // Sign In
        } else {
          signOut(); // Sign Out if signed in
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
      <BottomNavigationAction label="Prispevky" icon={<AddCircleIcon />} />
      {!session ? (
        [
          <BottomNavigationAction key="registracia" label="Registrácia" icon={<HowToRegIcon />} />,
          <BottomNavigationAction key="prihlasenie" label="Prihlásenie" icon={<HowToRegIcon />} />,
        ]
      ) : (
        [
          <BottomNavigationAction
            key="profil"
            label="Profil"
            icon={
              <Avatar
                alt="User Profile Picture"
                src={session.user?.image || ''}
                sx={{ width: 24, height: 24 }}
              />
            }
            onClick={() => router.push('/profil')}
          />,
          <BottomNavigationAction key="odhlasit" label="Odhlásiť" icon={<HowToRegIcon />} />,
        ]
      )}
    </BottomNavigation>
  );
};

export default NavBar;
