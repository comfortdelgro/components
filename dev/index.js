import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "../utils";
import { Badge, Button, RadioGroup, Radio } from "../components";
import Theme from "../Theme";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [selectedRadioValue, setSelectedRadioValue] = useState("");
  return (
    <Theme>
      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}
        modifiers={["large", "light-secondary"]}
      >
        This is a button
      </Button>
      <br/>
      <RadioGroup
        name="setRadioType"
        onClickRadioButton={setSelectedRadioValue}
        selectedValue={selectedRadioValue}
      >
        <Radio style={{ margin: "16px" }} value="primary" labelText="Primary"/>
        <Radio style={{ margin: "16px" }} value="primary-disabled" labelText="Disabled" disabled/>
        <Radio style={{ margin: "16px" }} type="secondary" value="secondary" labelText="Secondary" />
        <Radio style={{ margin: "16px" }} type="orange" value="orange" labelText="Orange" />
        <Radio style={{ margin: "16px" }} type="light" value="light" labelText="Light" />
        <Radio style={{ margin: "16px" }} type="light-secondary" value="light-secondary" labelText="Light Secondary" />
      </RadioGroup>
      <br/>
      <Badge style={{ margin: "16px" }}> Label </Badge>
      <Badge style={{ margin: "16px" }} type="primary"> Label </Badge>
      <Badge style={{ margin: "16px" }} type="orange"> Label </Badge>
      <Badge style={{ margin: "16px" }} type="purple"> Label </Badge>
      <Badge style={{ margin: "16px" }} type="red"> Label </Badge>
      <Badge style={{ margin: "16px" }} type="green"> Label </Badge>

      <Badge style={{ margin: "16px" }} type="default-light"> Label </Badge>
      <Badge style={{ margin: "16px" }} type="primary-light"> Label </Badge>
      <Badge style={{ margin: "16px" }} type="orange-light"> Label </Badge>
      <Badge style={{ margin: "16px" }} type="purple-light"> Label </Badge>
      <Badge style={{ margin: "16px" }} type="red-light"> Label </Badge>
      <Badge style={{ margin: "16px" }} type="green-light"> Label </Badge>
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
