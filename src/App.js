import { makeStyles } from '@mui/styles';
import Homepage from './Pages/HomePage'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: '#14161a',
    color: 'orange',
    minHeight: '100vh',
  },
}))

function App() {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Route path='/' component={Homepage} exact />
      </div>
    </BrowserRouter>
  )
}

export default App
