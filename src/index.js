import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Checkbox, RadioGroup, Radio } from "./components";
import { defaultTheme } from './utils';
import Theme from "./Theme";

const App = () => {
  const [selectedRadioValue, setSelectedRadioValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  return (
    <Theme theme={defaultTheme}>
      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}>
        Call to action
      </Button>
      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}
        type="secondary">
        Call to action
      </Button>
      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}
        type="negative">
        Call to action
      </Button>
      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}
        disabled>
        Call to action
      </Button>
      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}
        size="small">
        Call to action
      </Button>
      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}
        size="small"
        type="secondary">
        Call to action
      </Button>
      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}
        size="small"
        type="negative">
        Call to action
      </Button>
      <Button
        style={{ margin: "16px" }}
        onClick={() => alert("Clicked!")}
        size="small"
        disabled>
        Call to action
      </Button>
      <br/>
      <Checkbox style={{ margin: "16px" }} checked={checkboxChecked} onChecked={setCheckboxChecked}>Primary Checkbox</Checkbox>
      <Checkbox style={{ margin: "16px" }} checked={checkboxChecked} onChecked={setCheckboxChecked} disabled>Disabled Checkbox</Checkbox>
      <br/>
      <RadioGroup
        name="setRadioType"
        onClickRadioButton={setSelectedRadioValue}
        selectedValue={selectedRadioValue}
      >
        <Radio style={{ margin: "16px" }} value="primary" labelText="Choose an option"/>
        <Radio style={{ margin: "16px" }} value="primary-2" labelText="Choose an option"/>
        <Radio style={{ margin: "16px" }} value="primary-disabled" labelText="Disabled" disabled/>
      </RadioGroup>
    </Theme>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
