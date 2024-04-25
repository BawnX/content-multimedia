export interface Radio {
  id: string;
  label: string
}

function RadioGroupComponent({ name, radio }:
  {name: string, radio: Radio[]})
  {
    const radioHtml = (id: string, label: string, name: string, index: number) => (
      <div className="flex bg-gray-200 items-center ps-4 rounded dark:border-gray-700 mt-4 mb-4" key={index}>
        <input id={id} type="radio" value={id} name={name} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor={id} className="w-full py-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
      </div>
    )

  return radio.map((el, index) => (
    radioHtml(el.id, el.label, name, index)
  ));
}

export default RadioGroupComponent;
