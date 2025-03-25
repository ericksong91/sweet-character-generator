import flavors from "../_utils/flavors";
import SelectionCard from "./SelectionCard";

type SelectionProps = {
    selection: 'Scoop' | 'Flavor' | 'Eyes' | 'Mouth' | 'Cone' | 'Wrapper' | 'Background'
};

function SelectionContainer({
    selection,
}: SelectionProps) {

    const selectionOptions = {
        Scoop: [],
        Flavor: flavors,
        Eyes: [],
        Mouth: [],
        Cone: [],
        Wrapper: [],
        Background: []
    };

    const displayedOptions = selectionOptions[selection].map(option => (
        <SelectionCard
        key={option.id}
        id={option.id}
        name={option.name}
        imgsrc={option.src}
        />
    ))

    return (
        <div className=" flex flex-wrap justify-center h-100 w-110 rounded border border-amber-500 overflow-auto">
            {displayedOptions}
        </div>
    );
};

export default SelectionContainer;