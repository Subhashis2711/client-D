import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clients from "./components/Clients/Clients";
import Layout from "./components/Layout/Layout";
import "./assets/css/style.css";
import MediaQuery from "react-responsive";
import DesktopLayout from "./components/Layout/DesktopLayout";
import MobileLayout from "./components/Layout/MobileLayout";
import ClientListbar from "./components/Clients/ClientListbar";
import ClientDetailBox from "./components/Clients/ClientDetailBox";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <MediaQuery minWidth={961}>
                    <DesktopLayout>
                        <Routes>
                            <Route index path="/" element={<Clients />} />
                        </Routes>
                    </DesktopLayout>
                </MediaQuery>
                <MediaQuery maxWidth={960}>
                    <MobileLayout>
                        <Routes>
                            <Route index path="/" element={<ClientListbar />} />
                            <Route
                                index
                                path="/clients/:clientId"
                                element={<ClientDetailBox />}
                            />
                        </Routes>
                    </MobileLayout>
                </MediaQuery>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
