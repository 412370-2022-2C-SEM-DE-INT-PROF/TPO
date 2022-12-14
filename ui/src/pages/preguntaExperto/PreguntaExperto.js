import * as React from "react";
import { Typography, Button, Grid, Stack, Paper, Divider,Container,TextField,CardContent,CardMedia,Box,Card,Avatar} from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from '@mui/material/IconButton';
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { height } from "@mui/system";
import TextareaAutosize from '@mui/base/TextareaAutosize';
export default function preguntaExperto() {

  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    padding: "12px 18px",
    border: "3px solid",
    backgroundColor: "#25be8b",
    borderColor: "#25be8b",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#25be8b",
      borderColor: "#000",
      boxShadow: "none",
      color: "white",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#25be8b",
      borderColor: "#fff",
    },
  })
  
  ;

  return (
    <div>
      <Grid
        container
        component="main"
        sx={{
          height: "100%",
          width: "100%",
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing = {1}
      >
        <Grid
          item
          width="500px"
          height="300px"
        >
          <Typography variant="h5" gutterBottom fontWeight="bold" textAlign="Left">
            Pregunta al Experto
          </Typography>
          <Typography variant="h7" gutterBottom textAlign="left">
          De forma anonima vas a poder preguntarle a nuestros mejores especialistas, todas las dudas que tengas en cuanto a la salud.
            <ul>
            <li>Te aseguramos que recibiras una respuesta de calidad y confiable.</li>
            <li>Sera resuelta en menos de 48 horas.</li>
            <li>Es totalmente gratuito.</li>
            </ul> 

            
          </Typography>
        </Grid>
        <Grid item width="330" height="200px">
          <div className="imagen">
            <img
              src="img/Pregunta.jpg"
              width="300"
              height="200"
              alt="Pregunta"
            ></img>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        component="main"
        /* spacing={2} */ sx={{
          height: "100%",
          width: "100%",
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box component="span" sx={{ p: 2, border: '1px grey',backgroundColor: '#e2f7ef' }}>
          <Grid
            item
            width="900px"
            height="400px"
          >

            <Typography fontSize={14} gutterBottom fontWeight="bold" textAlign="left">
            Tu Pregunta
            </Typography>

            <TextareaAutosize
              aria-label="minimum height"
              minRows={7}
              placeholder="Ingresa tu pregunta..."
              style={{ width: 800 }}

            />
            <Typography fontSize={12} gutterBottom fontWeight="bold" textAlign="left">
              <ul>

              <li>Tu pregunta se publicará de forma anónima.</li>
              <li>Intentá que tu consulta médica sea clara y breve.</li>
              <li>La pregunta irá dirigida a todos los especialistas de ImproveMe, no a uno específico.</li>
              <li>Este servicio no sustituye a una consulta con un profesional de la salud. Si tenés un problema o una urgencia, acude a tu médico o a los servicios de urgencia.</li>
              <li>No se permiten preguntas sobre casos específicos o segundas opiniones.</li>
              <li>Por cuestiones de salud, no se publicarán cantidades ni dosis de medicamentos.</li>
              </ul>

            </Typography>
            <Container>
              <BootstrapButton variant="contained" disableRipple sx={{height:"10px", width:"10px", marginTop:"5px"}}>
                Enviar
              </BootstrapButton>
            </Container>



          </Grid>
        </Box>  
      </Grid>

      <Grid
        container
        component="main"
        sx={{
          height: "100%",
          width: "100%",
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing = {1}
      >
        <Grid
          item
          width="700px"
          height="400px"
        >
          <Typography variant="h5" gutterBottom fontWeight="bold" textAlign="left">
            Preguntas de los ultimos 7 dias
          </Typography>
          <Stack spacing={4}>
              <TextField
                  id="outlined-multiline-static"
                  multiline
                  defaultValue="Hola buenas noches mi consulta seria la hipnosis sirve para personas con drogadiccion de larga data "
                  inputProps={{
                    style: {
                      height: "50px",
                      width:"700px",
                    },
                  }}
                />
              <Grid
                item
                width="700px"
                height="400px"
              >
                  <Stack direction="row" spacing={2}>
                    <TextField
                          id="outlined-multiline-static"
                          multiline
                          fullWidth
                          defaultValue="Hola, es probable que una hipnosis dirigida por algún experto en el área genere mejorías en su calidad de vida. Sin embargo la adicción (y más una de larga data) es un problema multidimensional…  "
                          inputProps={{
                            style: {
                              height: "100px",
                            },
                          }}
                        />
                    <Grid item width="330" height="200px">
                    
                      
                      <Card sx={{ display: 'flex' }}>
                       
                        <Box sx={{ display: 'flex', flexDirection: 'column',boxShadow: 2,}}>
                          <Stack direction="row" spacing={0}>
                            <Avatar alt="doctor" src="img/prof3.jpeg" />
                          </Stack>

                          
                          <CardContent sx={{ flex: '1 0 auto' }}>
                              
                              <Typography component="div" variant="h5">
                                Dr. Nicolas Ramirez
                              </Typography>
                              

                            <Typography variant="subtitle1" color="text.secondary" component="div">
                              Deportólogo
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                              Bs As
                            </Typography>
                          </CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                        {[...Array(4)].map((e, i) => (
                          <StarIcon fontSize="small" key={1} />
                        ))}
                        {[...Array(1)].map(
                          (e, i) => (
                            <StarBorderIcon
                              fontSize="small"
                              key={1}
                            />
                          )
                        )}
                      </Typography>
                    </Box>
                  </Box>
                </Card>           
              </Grid>
            </Stack>
          </Grid>
 
          </Stack>
        </Grid>
      </Grid>



    </div>
  );
}