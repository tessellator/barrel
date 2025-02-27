import { useState } from "react";

// The following line is a barrel import. It will load slower because it causes
// more components to be loaded and compiled than necessary.
import { Button } from "antd";

// The following line loads only the Button component from the antd library. It
// will load faster than the barrel import.
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
