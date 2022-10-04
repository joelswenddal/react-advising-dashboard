import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageA from './pages/PageA';
import PageB from './pages/PageB';

function App() {
    return (
        <div className="App">
            <header>
                <Router>
                    <header>
                        <Routes>
                            <Route path="/" exact element={<PageA />}>
                            </Route>
                            <Route path="/pageB" element={<PageB />}>
                            </Route>
                        </Routes>
                    </header>
                </Router>
            </header>
        </div>
    );
}

export default App;