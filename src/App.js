import { makeStyles } from '@material-ui/core';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Header  from './components/Header';
import Alert from "./components/Alert";
import { lazy, Suspense} from 'react';
 const Homepage= lazy(()=>import ('./pages/Homepage'));
 const CoinPage= lazy(()=>import ('./pages/CoinPage'));
function App() {
  const useStyles = makeStyles(() =>({
    App:{
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh"

    }


  }));

  const classes = useStyles()
  return (

    <BrowserRouter>
    <div className={classes.App}>
      
      <Header/>
      
      <Suspense fallback={<div>Loading...</div>}>
      
      <Route path="/" component={Homepage} exact/>
      <Route path="/coins/:id" component={CoinPage}/>
      
      </Suspense>
      </div>
      <Alert />

    </BrowserRouter>

  
)
}

export default App;

