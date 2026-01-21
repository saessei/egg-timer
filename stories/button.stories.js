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

export const Start = Template.bind({});
Start.args = {
    text: 'Start',
    className: 'btn btn-start',
    disabled: false,
}

export const Stop = Template.bind({});
Stop.args = {
    text: 'Stop',
    className: 'btn btn-stop',
    disabled: false,
}

export const NextDisabled = Template.bind({});
NextDisabled.args = {
    text: 'Next',
    className: 'btn btn-next',
    disabled: true,
}

export const NextEnabled = Template.bind({});
NextEnabled.args = {
    text: 'Next',
    className: 'btn btn-next',
    disabled: false,
}

export const Back = Template.bind({});
Back.args = {
    text: 'Back',
    className: 'btn btn-back',
    disabled: false,
}
