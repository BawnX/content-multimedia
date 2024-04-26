import CardComponent from "../atoms/card"

export interface CardTheme{
  id: string,
  name: string,
  imageUrl: string,
  tag: string,
  category: Array<{id: string, name: string, count: number}>
}

function CardTheme ({cardTheme}: {cardTheme: Array<CardTheme>}){
  return (
    cardTheme.map((theme, index) => (
      <CardComponent href={"/themes/" + theme.tag} key={index} imgUrl={theme.imageUrl} tag={theme.tag} title={theme.name}>
        {
          theme.category.map((category, index) => (
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 text-base" key={index}>{category.name}: {category.count}</p>
          ))
        }
      </CardComponent>
    ))
  )
}

export default CardTheme;
