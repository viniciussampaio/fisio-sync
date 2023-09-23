"use client";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import photoLogin from "../../assets/wallpaper.png";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/home");
  };

  return (
    <>
      <Box sx={{ overflow: "hidden" }}>
        <Grid container style={{ minHeight: "100vh" }}>
          <Grid item xs={12} sm={6}>
            <Image
              src={photoLogin}
              alt="foto-logo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            style={{ padding: 10 }}
            alignItems="center"
            direction="column"
            justifyContent="center"
          >
            <Box>
              <Typography variant="h2" textAlign="center">
                Login
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2, background: "#084d6e" }}
              >
                Sign In
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
