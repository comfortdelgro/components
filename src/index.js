import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
import { Button } from "./components";
import Theme from "./Theme";

const App = () => {
  // const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <Theme>
      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}
        modifiers={["large", "primary"]}
      >
        This is a button
      </Button>
    </Theme>
  );
};

/* 
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>

      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}
        modifiers={["large", "primary"]}
      >
        This is a button
      </Button>

      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}
        modifiers={["large", "secondary"]}
      >
        This is a button
      </Button>

      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}
        modifiers={["large", "orange"]}
      >
        This is a button
      </Button>

      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}
        modifiers={["large", "light"]}
      >
        This is a button
      </Button>

      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}
        modifiers={["large", "lightSecondary"]}
      >
        This is a button
      </Button>

      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}
        modifiers={["large"]}
        disabled
      >
        This is a button
      </Button>

      <GlobalStyle />
    </ThemeProvider> 
    */

ReactDOM.render(<App />, document.querySelector("#root"));
