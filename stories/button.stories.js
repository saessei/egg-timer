import { Button } from "../components/button.js";

export default {
  title: "Button",
  argTypes: {
    text: { control: 'text'},
    className: { control: 'text' },
    disabled: { control: 'text'},
    id: {control: 'text' },
  }
};

const Template = (args) => {
    const container = document.createElement('div');
    container.innerHTML = Button(args);
    return container;
}

export const Primary = Template.bind({});
Primary.args = {
    id: 'primary-btn',
    text: 'Next',
    className: 'btn btn-primary',
    disabled: false,
}

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled-btn',
  text: 'Disabled',
  className: 'btn btn-primary',
  disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  id: 'secondary-btn',
  text: 'Secondary',
  className: 'btn btn-secondary',
  disabled: false,
};

