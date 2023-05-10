export enum InputTypeEnum {
    Number = 'number',
    Mail = 'email',
    String = 'text',
    Datetime = 'date',
    Select = 'select',
    File = 'file',
    Toggle = 'toggle',
}

export type SelectChoice = {
    key: string | number;
    value: string | number;
};
