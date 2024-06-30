import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.tsx";
import Nav from "./Components/Nav.tsx";
import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
