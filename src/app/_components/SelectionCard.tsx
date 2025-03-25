

type SelectionDisplayProps = {
    id: number
    name: string,
    imgsrc: string,
}

function SelectionCard({name, imgsrc, id}: SelectionDisplayProps) {

    return (
        <>
        <div className="inline-grid  w-auto h-auto gap-1">
            <img 
                className=" object-contain h-32 w-32 rounded border border-amber-500 m-0.5 "
                src={imgsrc}
                alt={name}/>
        </div>
        <div className="inline-grid  w-auto h-auto gap-1">
            <img 
                className=" object-contain h-32 w-32 rounded border border-amber-500 m-0.5 "
                src={imgsrc}
                alt={name}/>
        </div>
        <div className="inline-grid  w-auto h-auto gap-1">
            <img 
                className=" object-contain h-32 w-32 rounded border border-amber-500 m-0.5 "
                src={imgsrc}
                alt={name}/>
        </div>
        <div className="inline-grid  w-auto h-auto gap-1 ">
            <img 
                className=" object-contain h-32 w-32 rounded border border-amber-500 m-0.5 "
                src={imgsrc}
                alt={name}/>
        </div>
        </>
    )
}

export default SelectionCard;