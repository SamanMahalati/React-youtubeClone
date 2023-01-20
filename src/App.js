import { Provider } from "react-redux"

//Components
import { Navbar, VideoDetails , Home , ChannelDetail } from "./components";
import ErrorPage from "./shared/ErrorPage";

//Redux Store
import Store from "./redux/store";

import { Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
      </div>
    </Provider>
  );
}

export default App;
