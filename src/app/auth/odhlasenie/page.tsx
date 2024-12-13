"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button, Typography } from "@mui/material";
import { signOut } from "next-auth/react";

const SignOutPage = () => {
  const router = useRouter();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" }); // Sign out and redirect to home
  };

  const handleCancel = () => {
    router.push("/"); // Redirect back to the home page
  };

  return (
    <div>
      <Typography variant="h5">
        Are you sure you want to sign out?
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={handleSignOut}

      >
        Yes, Sign Out
      </Button>
      <Button variant="outlined" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  );
};

export default SignOutPage;
