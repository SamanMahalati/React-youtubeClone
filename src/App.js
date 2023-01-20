import { Provider } from "react-redux"

//Components
import { Navbar, VideoDetails, Home, ChannelDetail, SearchPage, Sidebar } from "./components";
import ErrorPage from "./shared/ErrorPage";

//Redux Store
import Store from "./redux/store";

//Style
import "./App.css"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Navbar />
        <section className="main">
          <Sidebar />
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/video/:id" element={<VideoDetails />} />
              <Route path="/channel/:id" element={<ChannelDetail />} />
              <Route path="/search/:id" element={<SearchPage />} />
              <Route path="/error" element={<ErrorPage />} />
            </Routes>
          </div>
        </section>
      </div>
    </Provider>
  );
}

export default App;
