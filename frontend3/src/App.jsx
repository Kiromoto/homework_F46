import './App.Module.scss';
import HeaderInfo from "./components/Header/HeaderInfo/HeaderInfo";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

import DishesList from './components/Body/DishesList/DishesList'
import {Route, Routes } from 'react-router-dom'
import SingleDish from "./components/Body/SingleDish/SingleDish";
import SingleCategory from "./components/Body/SingleCategory/SingleCategory"




function App() {
    return (
        <div className="App">
            <header className="App-header">
                <HeaderInfo/>
            </header>
            <body className="App-body">
                <Sidebar/>
                <Routes>
                    <Route path="/dishes/:id" element={<SingleDish/>}/>
                    <Route path="/category/:id" element={<SingleCategory/>}/>
                    <Route path="/" element={<DishesList/>}/>
                </Routes>
            </body>
            <Footer/>
        </div>
    );
}

export default App;
