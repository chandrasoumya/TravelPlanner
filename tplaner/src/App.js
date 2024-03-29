import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Authentication from './components/Authentication';
import Welcome from './components/Welcome';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/authentication" element={<Authentication/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
        </Routes>
      <Authentication/>
      </Router>
    </div>
  );
}

export default App;
