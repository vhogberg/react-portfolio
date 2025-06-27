import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
