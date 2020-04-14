import React from "react";
import { action } from "@storybook/addon-actions";
import { Header } from "../build";

export default {
  title: "Header",
  component: Header,
};

export const Text = () => (
  <Header onClick={action("clicked")}>Hello Button</Header>
);

export const Emoji = () => (
  <Header onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Header>
);
