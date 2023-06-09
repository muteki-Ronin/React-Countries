// CORE
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import { Header } from "./components/Header";
import { Main } from "./components/Main";
// PAGES
import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
};
