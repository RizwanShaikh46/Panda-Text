import React from 'react'
import Grid from '@material-ui/core/Grid'
import NoteAppBar from './components/NoteAppBar'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Content from './components/Content'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#7AD7F0',
    },
  },
});



class App extends React.Component {

  render() {
    
    return (
      <ThemeProvider theme={theme}>
        
      <Grid container direction="column">
        <NoteAppBar/>
        <Grid container style={{marginTop: '20px'}}>
          <Grid item sm={false} xs={false}/>
          <Grid item sm ={12} xs={12}>
            <Content/>
          </Grid>
         <Grid item sm={false} xs={false}/>
        </Grid>
        <Grid item style={{marginTop: '20px'}}/>
      </Grid>
      </ThemeProvider>
    )
}
}

export default App