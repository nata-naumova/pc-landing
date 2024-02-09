import { Route, Routes } from "react-router-dom";
import Main from "../../pages/Main";
import DetailPage from "../../pages/DetailPage";
import { CurrentServiceContext } from "../../contexts/CurrentServiceContext";
import { servicesList } from "../../constants";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SocialsWidget from "../SocialsWidget/SocialsWidget";

function App() {
  return (
    <>
      <CurrentServiceContext.Provider value={servicesList}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/service/:id" element={<DetailPage />} />
          </Routes>
        </main>
        <Footer />
        <SocialsWidget />
      </CurrentServiceContext.Provider>
    </>
  );
}

export default App;
