import './App.css';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Blog from './components/Blog';
import About from './components/About';
function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/blog' element={<Blog/>} />
        <Route  path='/about' element={<About/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
