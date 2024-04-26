import SelectComponent, {type Select} from "../atoms/select"


function SearchComponent({categories}: {categories: Select[]}){
  const selections: Select[] = [
    {option: "All Theme", value: "all", isDefault: true},
    ...categories
  ]

  return(
    <section className="z-10 flex divide-y divide-gray-100 rounded-lg shadow items-end">

      <SelectComponent selections={selections} label=""/>
      <div className="relative w-full">
        <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-emerald-300 focus:border-emerald-500" placeholder="Search by your content name." required />
        <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-emerald-600 rounded-e-lg border border-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </section>

  )
}

export default SearchComponent;
