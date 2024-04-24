import './App.css';
import MainPage from './MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <MainPage/> */}
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/aboutus" element={<AboutUs/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
