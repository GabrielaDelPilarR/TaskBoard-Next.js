
function List({title,children}) {
    return (
        <div className="flex flex-col flex-1 gap-4 p-4 text-gray-900 rounded bg-slate-300">
            <h2 className="font-bold">{title}</h2>
            <div className="flex flex-col gap-5">
                {children}
            </div>
            <div>
                Añadir otra tarjeta
            </div>
        </div>
    )
}

export default List
