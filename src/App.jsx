import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import History from './history/History';
import Home from './main/Home'
import Washing from './washing/Washing';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home active={'home'}/>} />
                <Route path='/histories' element={<History active={'histories'}/>} />
                <Route path='/wash-and-iron' element={<Washing />} />
                <Route path='*' element={'Not Found'} />
            </Routes>
        </Router>
    )
}

export default App;
