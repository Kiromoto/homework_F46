import './App.css';
import DishesList from './components/DishesList'
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'


function App() {
    return (
            <div className="App">
                <header className="App-header">Заголовок сайта
                    <DishesList />
                </header>
            </div>
    );
}

export default App;
