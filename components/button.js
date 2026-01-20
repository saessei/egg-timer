export function Button({id, text, className, disabled = false}) {
    const disabledAttr = disabled ? 'disabled' : '';
    return `<button id="${id}" class="${className}" ${disabledAttr}>${text}</button>`;
}