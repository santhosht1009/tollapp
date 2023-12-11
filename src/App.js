
import './App.css';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Home from './components/Home';
import DestinationOrigin from './components/DestinationOrigin';

function App() {
  return (
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/destination" element={<DestinationOrigin />} />
   </Routes></BrowserRouter>
  );
}

export default App;
