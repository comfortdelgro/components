# Getting Started with ComfrotDelGro's Design System

## Installation
```
npm i @comfortdelgro/design-system
```

### Usage
```
import { defaultTheme, Theme, Button, RadioGroup, Radio, Badge, Checkbox } from "@comfortdelgro/design-system";

function App() {
  const [selectedRadioValue, setSelectedRadioValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false); // use diff state for each checkbox

  return (
    <Theme theme={defaultTheme}>
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

      <Checkbox style={{ margin: "16px" }} checked={checkboxChecked} onChecked={setCheckboxChecked}>Primary Checkbox</Checkbox>
      <Checkbox style={{ margin: "16px" }} type="secondary" checked={checkboxChecked} onChecked={setCheckboxChecked}>Secondary Checkbox</Checkbox>
      <Checkbox style={{ margin: "16px" }} type="orange" checked={checkboxChecked} onChecked={setCheckboxChecked}>Orange Checkbox</Checkbox>
      <Checkbox style={{ margin: "16px" }} type="light" checked={checkboxChecked} onChecked={setCheckboxChecked}>Light Checkbox</Checkbox>
      <Checkbox style={{ margin: "16px" }} type="light-secondary" checked={checkboxChecked} onChecked={setCheckboxChecked}>Light Secondary Checkbox</Checkbox>
      <Checkbox style={{ margin: "16px" }} checked={checkboxChecked} onChecked={setCheckboxChecked} disabled>Disabled Checkbox</Checkbox>

    </Theme>
  );
}

export default App;
```
