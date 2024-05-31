import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "../pages/Home/Home";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes;