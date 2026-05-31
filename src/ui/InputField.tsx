type InputFieldProps = {
    label: string;
    placeholder?: string;               
    type?: string;
    value: string;
    onChange: (
        e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
};