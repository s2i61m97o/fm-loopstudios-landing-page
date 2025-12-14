import useScreenSize from "./useScreenSize";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const screenSize = useScreenSize();

  return (
    <>
      <Header screenSize={screenSize} />
      <Main screenSize={screenSize} />
      <Footer />
    </>
  );
}

export default App;
