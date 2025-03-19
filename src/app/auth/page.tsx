'use client'
import React, { useState } from 'react';
import {
  Button,
  TextField,
  Paper,
  Typography,
  Tabs,
  Tab,
  Box,
  Grid,
} from '@mui/material';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const url = isLogin ? '/api/login' : '/api/register'; // відповідні URL для API
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Обробка успішного входу або реєстрації
      console.log(await response.json()); // Сконсольте відповідь для перевірки
    } else {
      // Обробка помилок
      console.error('Error logging in or registering');
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setIsLogin(newValue === 0);
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 400, margin: 'auto' }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" align="center">
          {isLogin ? 'Login' : 'Register'}
        </Typography>
        <Tabs value={isLogin ? 0 : 1} onChange={handleTabChange}>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" fullWidth>
                {isLogin ? 'Login' : 'Register'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AuthPage;