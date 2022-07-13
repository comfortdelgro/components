# Getting Started with ComfrotDelGro's Design System

## Installation
```
npm i @comfortdelgro/design-system
```

### Usage
```
import { defaultTheme, Theme, Button, RadioGroup, Radio, Checkbox } from "@comfortdelgro/design-system";

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
}

export default App;
```
