import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Button, Link, Toolbar, Box, InputBase, Typography } from "@mui/material";

export default function NavProfesional() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{backgroundColor:"#2fc4b2" }}
    >
      <Toolbar disableGutters>
        <img
          href="/"
          src="img/logo01.svg"
          alt="logo"
          style={{ marginLeft: "15px", maxHeight: "90px", maxWeight: "50px" }}
        />
        <Box sx={{ flexGrow: 1 }}>
         <Link
            color="text.primary"
            href="/uno"
            sx={{ my: 1, mx: 1.5 }}
            fontSize= '20px'
            fontWeight={500}
          >
            Seguimientos
          </Link>
          <Link
            color="text.primary"
            href="/sports"
            sx={{ my: 1, mx: 1.5,  }}
            fontSize= '20px'
            fontWeight={500}
          >
            Preguntas
          </Link>
        </Box>
        <Link
            color="text.primary"
            href="/sports"
            sx={{ my: 1, mx: 1.5,  }}
            fontSize= '20px'
            fontWeight={500}
          >
            Mi perfil
          </Link>         
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Cerrar sesion
        </Button>
      </Toolbar>
    </AppBar>
  );
}
