export interface Select {
  option: string,
  value: string
  isDefault?: boolean
}

function SelectComponent({label, selections}: {label: string, selections: Select[]}){

  return(
    <section className="w-[250px] mx-auto">
      <label htmlFor="countries" className="block mb-2 text-base bg-skin-accent">{label}</label>
      <select id="countries" className="bg-slate-200 border-gray-400 text-base rounded-sm focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5">
        {
          selections.map((select) => {
            if(select.isDefault){
              return(<option key={select.value} defaultValue={select.value}>{select.option}</option>)
            }

            return(<option key={select.value} value={select.value}>{select.option}</option>)
          })
        }
      </select>
    </section>
  )
}

export default SelectComponent;
