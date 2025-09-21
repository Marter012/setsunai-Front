import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import Routes from "./routes/Routes";

function App() {
  return (
    <Layout>
      <NavBar />
      <Routes/>
      <img className="backgroundBody img1" src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754254603/SETSUNAI/Edifico_2_at8ooq.png" alt="" />
      <img className="backgroundBody img2" src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754254604/SETSUNAI/Edificio_1_sn15ac.png" alt="" />
      <img className="backgroundBody img3" src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1754254604/SETSUNAI/Arbol_1_uxefjr.png" alt="" />
      <Footer/>
    </Layout>
  );
}

export default App;
