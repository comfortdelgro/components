# Getting Started with Zig Components

## Installation
```
npm i styled-components zig-components
```

### Usage
```
import { ThemeProvider } from "styled-components";
import { defaultTheme, Button } from "zig-components";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button
      style={{ margin: "16px" }}
      onClick={() => alert("Clicked!")}
      modifiers={["large", "primary"]}
      >
        This is a button
      </Button>
    </ThemeProvider>
  );
}

export default App;
```
