"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button, Typography, Stack, Container } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout"; // Import the Logout icon
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
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
      }}
    >
      <div style={{ width: "100%" }}>
        <Typography
          variant="h6"
          component="h2"
          textAlign="center"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          Confirm Sign Out
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 3 }}
        >
          Are you sure you want to sign out? You can always come back later!
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          <Button
            variant="contained"
            color="error"
            onClick={handleSignOut}
            startIcon={<LogoutIcon />} // Add the Logout icon
            sx={{
              minWidth: 120,
              borderRadius: "20px",
              transition: "transform 0.2s, background-color 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "#d32f2f",
              },
            }}
          >
            Sign Out
          </Button>
          <Button
            variant="outlined"
            onClick={handleCancel}
            sx={{
              minWidth: 120,
              borderRadius: "20px",
              transition: "transform 0.2s, border-color 0.2s, background-color 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
                borderColor: "#1976d2",
                backgroundColor: "#f0f8ff",
              },
            }}
          >
            Cancel
          </Button>
        </Stack>
      </div>
    </Container>
  );
};

export default SignOutPage;
