import './App.css';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import CompletionsGeneric from './components/CompletionsGeneric';
import CompletionsSpefic from "./components/CompletionsSpefic";

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    const header = {
        "Authorization": "Bearer  <<Secret Key>>",
        "Content-Type": 'application/json',
    };
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route path="/completions-generic" element={<CompletionsGeneric headerParameters={header}/>}/>
                    <Route path="/completions-specific" element={<CompletionsSpefic headerParameters={header}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
