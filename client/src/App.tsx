import { Navbar } from "./components";
import { Home, Details } from "./pages";
import { LayoutContainer } from "./styled-components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <LayoutContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </LayoutContainer>
    </>
  );
}

export default App;
