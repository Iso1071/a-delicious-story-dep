import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ByCategory from "./pages/ByCategory";
import ByPopularity from "./pages/ByPopularity";
import Detail from "./pages/Detail";
import Error404 from "./pages/404";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/by-category" element={<ByCategory />} />
        <Route path="/by-popularity" element={<ByPopularity />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
