import { useState } from "react";
import Envelope from "./Envelope";
import Body from "./Body";
import "./App.css"

export default function App() {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return <Envelope onFinish={() => setOpened(true)} />;
  }

  // Replace this with your <Main /> page later
  return <h1 style={{ textAlign: "center", marginTop: "30vh" }}>
    <Body/>
    </h1>;
}
