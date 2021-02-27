import StyledGlobal from './Components/GlobalStyle'
import Nav from './Components/Nav'

// Router
import {Switch, Route} from 'react-router-dom';

// Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className="App">
      <StyledGlobal />
      <Nav />
      <Switch> {/* Switch renders component and stops looking when matched */}
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path='/work' exact>
          <OurWork />
        </Route>
        <Route path='/work/:id'>
          <MovieDetail />
        </Route>
        <Route path='/contact'>
          <ContactUs />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
