import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"

function App() 
{
    return 
    (
        <BrowserRouter>
            <nav>
                <h1> Korean Lyric App </h1>
                <Link to="/"> Home </Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/:id" element={<Update />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;