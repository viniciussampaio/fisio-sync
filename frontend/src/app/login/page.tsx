"use client";

import { Box, Grid, TextField, Typography } from "@mui/material";
import photoLogin from "../../assets/wallpaper.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/agendamentos");
    }, 2000);
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
                fullWidth
                id="email"
                label="Seu e-mail"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2, background: "#084d6e" }}
                loading={loading}
              >
                Entrar
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
