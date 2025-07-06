import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import ErrorBoundary from "./providers/error/ErrorBoundary";
import Main from "@/pages/main/ui/Main";

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
          <footer></footer>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
