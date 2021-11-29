import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './views/Login'
import Dashboard from './views/Dashboard'

import './App.css'

const App = (): JSX.Element => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
