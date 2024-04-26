function AccordionWrapper({title, links}: {title: string, links: Array<{link: string, name: string}>}){
  return (
    <div className="transition hover:bg-emerald-100">
      <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
        <h3>{title}</h3>
      </div>
      <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
        {
          links.map(link => (
            <a href={link.link} target="_blank">{link.name}</a>
          ))
        }
      </div>
    </div>
  )
}

export default AccordionWrapper;
