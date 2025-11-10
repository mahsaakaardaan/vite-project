type Props = {
  title?: string;
  style?: string;
  type?: string;
  required?: boolean;
  name?: string;
  value?: any;
  onChange?: any;
  placeholder?: string;
};

function Input({
  title,
  style,
  required = false,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  ...rest
}: Props) {
  return (
    <div className={`flex-col ${style}`}>
      {title && (
        <p>
          {title}
          {required ? <span className="text-error">*</span> : null}
        </p>
      )}
      <input
        {...rest}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className="bg-bg py-3 px-5 rounded-lg mt-2 w-full
        focus:border-solid focus:border-b-1 focus:border-x-0 
        focus:border-t-0 focus:border-secondary caret-secondary"
      />
    </div>
  );
}

export default Input;
