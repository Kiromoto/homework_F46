import './App.Module.scss';
import DishesList from './components/DishesList'
import CategoryList from "./components/CategoryList/CategoryList";
import {Route, Routes, Link} from 'react-router-dom'


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav className="navbar">
                    <Link to="/">Все рецепты</Link>
                    <Link to="/category">Категории</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<DishesList/>} />
                    <Route path="/category" element={<CategoryList/>} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
