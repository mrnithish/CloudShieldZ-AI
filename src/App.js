import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import ContainerDetails from './components/ContainerDetails';
import AIReport from './components/AIReport';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/container-details" element={<ContainerDetails />} />
        <Route path="/ai-report" element={<AIReport />} />
      </Routes>
    </Router>
  );
}

export default App;
