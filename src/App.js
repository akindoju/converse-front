import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constant/routes";
import Join from "./pages/join/join";
import Chat from "./pages/chat/chat";

const App = () => (
  <Router>
    <Route path={ROUTES.JOIN} exact component={Join} />
    <Route path={ROUTES.CHAT} exact component={Chat} />
  </Router>
);

export default App;
