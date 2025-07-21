import "./style.css";
import Header from "./components/Header";
import Homesec from "./components/Homesec";
import Mainsec from "./components/Mainsec";
import Aboutsec from "./components/Aboutsec";
import Contactsec from "./components/Contactsec";
import Servicessec from "./components/Servicessec";
import What_i_learned from "./components/What_i_learned";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Homesec />
      <Mainsec />
      <Aboutsec />
      <Contactsec />
      <Servicessec />
      <What_i_learned />
      <Footer />
    </>
  );
}
export default App;
