import ThemeProvider from "styles/ThemeProvider";
import GlobalStyle from "styles/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes";

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
