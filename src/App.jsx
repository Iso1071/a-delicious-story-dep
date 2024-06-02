import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ByCategory from "./pages/ByCategory";
import ByPopularity from "./pages/ByPopularity";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Error404 from "./pages/404";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home supabase={supabase} />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/by-category"
          element={<ByCategory supabase={supabase} />}
        />
        <Route path="/by-popularity" element={<ByPopularity />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login supabase={supabase} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
