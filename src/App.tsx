import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Header } from "./components/header";
import "../src/styles/main.scss";
import { Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="fade-in">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
