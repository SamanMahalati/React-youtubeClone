import { Provider } from "react-redux"

//Components
import { Navbar, Sidebar } from "./components";

//Redux Store
import Store from "./redux/store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Navbar />
        <Sidebar />
      </div>
    </Provider>
  );
}

export default App;
