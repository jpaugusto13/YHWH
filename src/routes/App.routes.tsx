import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Storage from "../components/Storage/Storage";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Storage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
