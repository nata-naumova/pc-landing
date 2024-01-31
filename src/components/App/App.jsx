import Banners from "../Banners/Banners";
import Header from "../Header/Header";
import Services from "../Services/Services";
import styles from "./App.module.css";

function App() {
  const linesCount = 6;
  const shapesCount = 10;
  return (
    <>
      {/* <div className={styles.lines}>
        {Array.from({ length: linesCount }).map((_, index) => (
          <div key={index} className={styles.line}>
            <div className={styles.shapes}>
              {Array.from({ length: shapesCount }).map((_, index) => (
                <span key={index}></span>
              ))}
            </div>
          </div>
        ))}
      </div> */}
      <div className={styles.container}>
        <Header />
        <Banners />
        <Services />
      </div>
    </>
  );
}

export default App;
