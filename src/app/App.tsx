import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import ErrorBoundary from "./providers/error/ErrorBoundary";
import Main from "@/pages/main/ui/Main";
import Footer from "@/widgets/footer/Footer";
import { Catalog } from "@/features/catalog";

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <main>
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </main>
          <Footer />
            <main>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/catalog" element={<Catalog />} />
              </Routes>
            </main>
          <footer></footer>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
