import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/about'
import Contact from './Component/contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;
