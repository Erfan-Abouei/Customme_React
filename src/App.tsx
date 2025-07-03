import { BrowserRouter as Router, Routes } from "react-router"
import route from './routes/index'

const App = () => {
  return (
    <Router>
      <Routes>
        {route}
      </Routes>
    </Router>
  )
}

export default App