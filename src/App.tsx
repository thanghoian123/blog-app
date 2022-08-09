import "react-quill/dist/quill.snow.css";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import MainLayout from "./layout";
import RouteManage from "./routes";

function App() {
  // console.log("🚀 ~ file: App.tsx ~ line 17 ~ App ~ firebaseConfig", firebaseConfig)
  return (
    <Router>
      <MainLayout>
        <RouteManage />
      </MainLayout>
    </Router>
  );
}

export default App;
