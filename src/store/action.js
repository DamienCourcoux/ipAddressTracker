export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const createChangeInputValue = (newValue) => ({
    type: CHANGE_INPUT_VALUE,
    newValue,
});