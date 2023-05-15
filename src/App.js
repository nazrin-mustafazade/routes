// App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/Signin';

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <Navigation />
        <Routes>
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignIn} />
        </Routes>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
