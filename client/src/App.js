
import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import memories from './images/memories.jpg'

function App() {
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h5' align='center' gutterBottom>
          Memories
        </Typography>
        <img src={memories} alt='memories' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
            

            </Grid>
            <Grid item xs={12} sm={7}>
              

            </Grid>

          </Grid>

        </Container>


      </Grow>


    </Container>
  );
}

export default App;
