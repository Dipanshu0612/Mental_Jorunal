import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Qotd from './Pages/qotd';
import Write from './Pages/Write';
import MoodAnalysis from './Pages/MoodAnalysis';
import Journals from './Pages/Journals';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/qotd' element={<Qotd />}></Route>
          <Route path='/write' element={<Write />}></Route>
          <Route path='/journals' element={<Journals />}></Route>
          <Route path='/analytics' element={<MoodAnalysis />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
