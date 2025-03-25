

type SelectionDisplayProps = {
    id: number
    name: string,
    imgsrc: string,
}

function SelectionCard({name, imgsrc, id}: SelectionDisplayProps) {

    return (
        <div>
            <img 
                src={imgsrc}
                alt={name}/>
        </div>
    )
}

export default SelectionCard;