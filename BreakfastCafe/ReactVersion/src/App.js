import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './components/Home';
import Menu from './components/Menu';
import Catering from './components/Catering';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Catering" element={<Catering />} />
      </Routes>
    </Router>
  );
};

export default App;

// the "react-router-dom" is a libray that helps handle navigation (routing) in React.
// It allows us to create multiple pages and switch between them without having to refresh the page.

  // we import the required components from react-router-dom. BrowserRouter (aliased as Router) is a 
  // component that wraps our application and provides routing functionality. Route is a component that 
  // defines a mapping between a URL path and a React component, and Routes is a component that wraps
  // multiple Route components and renders the first one that matches the current URL.

  // The first Route has a path of '/', which corresponds to the home page. The element prop is set to the Home component, 
  // which means that when the URL path is '/', the Home component will be rendered. The second Route has a path of 
  // '/Menu', which corresponds to the menu page. The element prop is set to the Menu component, which means that when 
  // the URL path is '/Menu', the Menu component will be rendered. With this setup, react-router-dom listens for changes
  // in the URL and renders the appropriate components based on the defined routes.