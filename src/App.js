import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clients from "./components/Clients/Clients";
import Layout from "./components/Layout/Layout";
import "./assets/css/style.css";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route index path="/" element={<Clients />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
