import React from "react";
import { action } from "@storybook/addon-actions";
import { Header } from "../build";
export default {
    title: "Header",
    component: Header,
};
export var Text = function () { return (React.createElement(Header, { onClick: action("clicked") }, "Hello Button")); };
export var Emoji = function () { return (React.createElement(Header, { onClick: action("clicked") },
    React.createElement("span", { role: "img", "aria-label": "so cool" }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF"))); };
