export enum InputTypeEnum {
    Number,
    Mail,
    String,
    Datetime,
    Select,
    File,
    Toggle,
    Radio,
}

export type SelectChoice = {
    key: string | number;
    value: string | number;
};

export type DisabledDate = {
    startDate: string | Date;
    endDate: string | Date;
};

export type DateParams = {
    asSingle?: boolean;
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
    startFrom?: Date;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    disabledDates?: DisabledDate[];
};
