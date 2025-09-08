import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Evaluate from './pages/Evaluate'
import Results from './pages/Results'
import History from './pages/History'
import About from './pages/About'
//Auto import navbar with "/" inside <Navbar>


function App() {
  return (
    <Router>
      <Navbar />
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/evaluate" element={<Evaluate />} />
          <Route path="/history" element={<History />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
