/** jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Button, Card } from "@theme-ui/components";
const modes = ["a", "b", "c", "d"];
const Item = ({ mode }) => {
  return (
    <div>
      <div>
        <Card sx={{ bg: mode + ".background" }}>
          <div sx={{ color: mode + ".text" }}>Sample text mode {mode}</div>
          <Button sx={{ color: mode + ".textPrimary", bg: mode + ".primary" }}>
            Button
          </Button>
        </Card>
      </div>
    </div>
  );
};

const Preview = () => {
  return (
    <>
      {modes.map(m => (
        <Item key={m} mode={m} />
      ))}
    </>
  );
};

export default Preview;
