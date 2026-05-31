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
        <div className="flex flex-col gap-2">
            <label className="font-medium">{label}</label>

            {large ? (
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    rows={5}
                    className="border rounded-lg p-3 resize-none"
                    />
            ) : (
                <input 
                  type={type}
                  placeholder={placeholder}
                  value= {value}
                  onChange={onChange}
                  className="border rounded-lg p-3"
                  />
            )}
        </div>
    );

}