# Getting Started with Zig Components

## Installation
```
npm i @comfortdelgro/design-sytem
```

### Usage
```
import { ThemeProvider } from "styled-components";
import { defaultTheme, Button, RadioGroup, Radio, Badge } from "@comfortdelgro/design-system";

function App() {
  const [selectedRadioValue, setSelectedRadioValue] = useState("");
  const [checkBoxChecked, setCheckBoxChecked] = useState(false); // use diff state for each checkbox

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button
      style={{ margin: "16px" }}
      onClick={() => alert("Clicked!")}
      modifiers={["large", "primary"]}
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

      <br/>

      <CheckBox style={{ margin: "16px" }} checked={checkBoxChecked} onChecked={setCheckBoxChecked}>Primary CheckBox</CheckBox>
      <CheckBox style={{ margin: "16px" }} type="secondary" checked={checkBoxChecked} onChecked={setCheckBoxChecked}>Secondary CheckBox</CheckBox>
      <CheckBox style={{ margin: "16px" }} type="orange" checked={checkBoxChecked} onChecked={setCheckBoxChecked}>Orange CheckBox</CheckBox>
      <CheckBox style={{ margin: "16px" }} type="light" checked={checkBoxChecked} onChecked={setCheckBoxChecked}>Light CheckBox</CheckBox>
      <CheckBox style={{ margin: "16px" }} type="light-secondary" checked={checkBoxChecked} onChecked={setCheckBoxChecked}>Light Secondary CheckBox</CheckBox>
      <CheckBox style={{ margin: "16px" }} checked={checkBoxChecked} onChecked={setCheckBoxChecked} disabled>Disabled CheckBox</CheckBox>

    </ThemeProvider>
  );
}

export default App;
```
