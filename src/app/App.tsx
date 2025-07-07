import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import ErrorBoundary from "./providers/error/ErrorBoundary";
import Main from "@/pages/main/ui/Main";
import Footer from "@/widgets/footer/Footer";
import { Catalog } from "@/features/catalog";
import Contacts from "@/pages/contacts/ui/Contacts";
import { ProductDetail } from "@/features/product-detail";
import { Blog } from "@/features/blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>

          <main>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="blog" element={<Blog />} />
              <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
          </main>
          <Footer />
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
