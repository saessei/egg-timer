import { Label } from "../components/label.js";

export default {
  title: "Label",
  component: Label,
};

export const SoftBoiled = () =>
  Label({
    text: "Soft Boiled Egg",
  });

export const HardBoiled = () =>
  Label({
    text: "Hard Boiled Egg",
  });

export const FriedEgg = () =>
  Label({
    text: "Fried Egg",
  });

export const Scrambled = () =>
  Label({
    text: "Scrambled Egg",
  });
