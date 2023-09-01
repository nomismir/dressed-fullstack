import { SelectChoice } from '@/types/Input';
import { InputForm } from '@/types/Form';

export type StepFormSignup = {
    title: string;
    inputs: InputForm[];
};

export type SignUpFormValues = {
    firstName: string | null;
    lastName: string | null;
    age: number | null;
    email: string | null;
    position: string | null;
    housingAssistance: number | null;
    socialCriteria: number | null;
    gradeAttachment: number | null;
    topSize: number | null;
    bottomSize: number | null;
    participation: number | null;
    date: number | null;
};

export type SignUpFormErrors = {
    firstName?: string;
    lastName?: string;
    age?: string;
    email?: string;
    position?: string;
    housingAssistance?: string;
    socialCriteria?: string;
    gradeAttachment?: string;
    topSize?: string;
    bottomSize?: string;
    participation?: string;
    date?: string;
};

export const baseChoices: SelectChoice[] = [
    {
        key: 1,
        value: 'Oui',
    },
    {
        key: 0,
        value: 'Non',
    },
];

export const positionChoices: SelectChoice[] = [
    {
        key: 1,
        value: 'Dans Paris',
    },
    {
        key: 2,
        value: 'En dehors de Paris',
    },
];

export const topSizeChoices: SelectChoice[] = [
    {
        key: 'xs',
        value: 'XS',
    },
    {
        key: 's',
        value: 'S',
    },
    {
        key: 'm',
        value: 'M',
    },
    {
        key: 'l',
        value: 'L',
    },
    {
        key: 'xl',
        value: 'XL',
    },
    {
        key: 'xxl',
        value: 'XXL',
    },
    {
        key: 'other',
        value: 'Autre',
    },
];

export const bottomSizeChoices: SelectChoice[] = [
    {
        key: 32,
        value: '32',
    },
    {
        key: 34,
        value: '34',
    },
    {
        key: 36,
        value: '36',
    },
    {
        key: 38,
        value: '38',
    },
    {
        key: 40,
        value: '40',
    },
    {
        key: 42,
        value: '42',
    },
    {
        key: 44,
        value: '44',
    },
    {
        key: 46,
        value: '46',
    },
    {
        key: 48,
        value: '48',
    },
    {
        key: 'other',
        value: 'Autre',
    },
];

export const participationChoices: SelectChoice[] = [
    {
        key: 0,
        value: 'Je souhaite profiter du Pop Up Store',
    },
    {
        key: 1,
        value: 'Je ne souhaite pas profiter du Pop Up Store',
    },
];
