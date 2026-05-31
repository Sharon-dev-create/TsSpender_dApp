type InputFieldProps = {
    label: string;
    placeholder?: string;               
    type?: string;
    value: string;
    large: boolean;
    onChange: (
        e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
};

export default function InputField({
    label,
    placeholder,
    type = "text",
    value,
    large = false,
    onChange,
}: InputFieldProps) {
    return (
        <div className={`form-group ${large ? 'form-group-lg' : ''}`}>
            <label htmlFor={label}>{label}</label>
            <input
                type={type}
                id={label}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="form-control"
            />
        </div>
    );
}