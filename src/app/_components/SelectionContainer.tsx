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
        <div className="">
            {displayedOptions}
        </div>
    );
};

export default SelectionContainer;