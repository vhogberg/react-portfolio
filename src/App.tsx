import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./pages/MainContent/MainContent";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
