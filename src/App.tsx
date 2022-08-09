import "react-quill/dist/quill.snow.css";
import "./App.css";
import MainLayout from "./layout";
import RouteManage from "./routes";


function App() {

  // console.log("🚀 ~ file: App.tsx ~ line 17 ~ App ~ firebaseConfig", firebaseConfig)
  return (
    <MainLayout>
      <RouteManage />
    </MainLayout>
  );
}

export default App;
