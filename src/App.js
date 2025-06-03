import { Button, defaultTheme, Provider } from "@adobe/react-spectrum";

export default App;

function App() {
  return (
    <Provider theme={defaultTheme}>
      <br />
      <br />
      <br />
      <Button variant="accent" onPress={() => alert("Hey there!")}>
        Hello React Spectrum!
      </Button>
    </Provider>
  );
}
