import { Provider } from "react-redux"

//Style
import styled from "styled-components";

//Components
import { Navbar, Sidebar, NewVideo } from "./components";

//Redux Store
import Store from "./redux/store";

//Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #404040;
`

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Navbar />
        <Container>
          <Sidebar />
          <NewVideo />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
