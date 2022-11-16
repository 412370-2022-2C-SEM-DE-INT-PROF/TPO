import * as React from "react";
import { Typography,Button, Container, Stack, Paper, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
export default function BusquedaOcho() {


  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 24,
    padding: '10px 20px',
    border: '1px solid',
    backgroundColor: '#25be8b',
    borderColor: '#25be8b',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#fff',
      borderColor: '#000',
      boxShadow: 'none',
      color: 'black'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Container>
        <Typography variant="h2" gutterBottom>
        ¿Que zona?
        </Typography>
      </Container>

      <Stack 
        justifyContent="flex-end"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Aductor/ingle
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Cadera
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
          Cuadricep 
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Isquiotibial
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Gemelo
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Tobillo
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Pie
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Otro
        </BootstrapButton>

      </Stack>

      <div className="imagen">
        <img src="img/5.jpg" width="750" height="450 "></img>
      </div>
    </div>

  );
}