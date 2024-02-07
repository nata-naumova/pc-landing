import Advantages from "../Advantages/Advantages";
import Banners from "../Banners/Banners";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Installment from "../Installment/Installment";
import Services from "../Services/Services";
import Socials from "../Socials/Socials";
import SocialsWidget from "../SocialsWidget/SocialsWidget";
import Testimonials from "../Testimonials/Testimonials";
import WorkSteps from "../WorkSteps/WorkSteps";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Banners />
        <Services />
        <Installment />
        <WorkSteps />
        <Advantages />
        <Socials /> 
        <Testimonials />
        <Footer />
      </div>
      <SocialsWidget />
    </>
  );
}

export default App;
