
type SelectionProps = {
    selection: string;
};

function SelectionContainer({
    selection,
}: SelectionProps) {

    return(
        <>
        <h1 className="text-amber-900/85 bg-amber-600/30 px-4" 
        >
            {selection}
        </h1>
        </>
    );
};

export default SelectionContainer;