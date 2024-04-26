function ButtonComponent({ type, mode, onClick, children, id }:
  {type: "submit"| "button" | "reset", mode: "rounded" | "rectangle", onClick?: () => void, children: JSX.Element, id: string})
{
  const modes = {
    rounded: "button button--rounded",
    rectangle: "button button--rectangle",
  };

  return (
    <button type={type} className={modes[mode]} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonComponent;
