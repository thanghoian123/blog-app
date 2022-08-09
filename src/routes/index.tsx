import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ManagePage from "../pages/Manage/ManagePage";
function RouteManage() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postEditor" element={<ManagePage />} />
      </Routes>
  );
}

export default RouteManage;
