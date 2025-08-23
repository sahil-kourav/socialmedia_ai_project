import Loader from "./components/Loader";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="bg-[#ECF0F1] text-[#34495E] w-screen h-screen overflow-x-hidden">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
