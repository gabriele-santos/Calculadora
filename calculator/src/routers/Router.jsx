import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ButtonsNumbers from "../components/ButtonsNumbers";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/calculator" />} />
        <Route path="/calculator" element={<ButtonsNumbers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
