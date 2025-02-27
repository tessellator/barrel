import { useState } from "react";
import { Button } from "antd";
// import Button from "antd/lib/button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-testid="counter">{count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increase</Button>
      <Button onClick={() => setCount(count - 1)}>Decrease</Button>
    </div>
  );
}
