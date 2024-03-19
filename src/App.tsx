import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProjectDetails from "./pages/ProjectDetails"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project/:id" element={<ProjectDetails />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  )
}

export default App