function InputComponent({ id, name, type, placeholder, label }:
  {id: string, name: string, type: "string" | "number" | "email" | "password", placeholder: string, label?: string})
  {
  return (
    <div>
      <label htmlFor={id} className="input--lavel">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required
        className="input input--invalid input--valid"
      />
    </div>
  );
}

export default InputComponent;
