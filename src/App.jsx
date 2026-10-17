import { useState } from "react";
import Envelope from "./Envelope";
import Body from "./Body";
import "./App.css"

export default function App() {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return <Envelope onFinish={() => setOpened(true)} />;
  }

  return <div style={{ textAlign: "center", marginTop: "60px" }}>
    <Body />
    </div>;
}