import StyledGlobal from './Components/GlobalStyle'
import Nav from './Components/Nav'

// Router
import {Switch, Route, useLocation} from 'react-router-dom';

// Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

// Animation
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <StyledGlobal  />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}> {/* Switch renders component and stops looking when matched */}
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
      </AnimatePresence>
    </div>
  );
}

export default App;
