import { createApp, registerElement } from "nativescript-vue";
import Home from "./components/Home.vue";
import { Button, Img, View, Br, Text, Input } from "@triniwiz/nativescript-masonkit";
import {
  B,
  Code,
  Div,
  H1,
  H2,
  H3,
  H4,
  P,
  Span,
} from "@triniwiz/nativescript-masonkit/web";
import { Application } from "@nativescript/core";

registerElement("view", () => View);
registerElement("div", () => Div);
registerElement("img", () => Img);
registerElement("text", () => Text);
registerElement("p", () => P);
registerElement("sspan", () => Span);
registerElement("b", () => B);
registerElement("h1", () => H1);
registerElement("h2", () => H2);
registerElement("h3", () => H3);
registerElement("h4", () => H4);
registerElement("code", () => Code);
registerElement("sbutton", () => Button);
registerElement("br", () => Br);
registerElement("input", () => Input);

createApp(Home).start();
