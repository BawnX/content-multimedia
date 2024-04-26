function Card ({href, imgUrl,tag, children, title}: {href: string, imgUrl:string, tag:string, title: string, children: JSX.Element[]}){
  return (
    <a href={href} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-full rounded-t-lg md:h-auto md:w-64 md:rounded-none aspect-square" src={imgUrl} alt={tag}/>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 text-xl">{title}</p>
        {children}
      </div>
    </a>
  )
}

export default Card;
