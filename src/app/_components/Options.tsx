"use client";
import { useState } from "react";

import SelectionContainer from "./SelectionContainer";

function Options() {

    type Selection = {
        id: number;
        name: string;
    };

    const selections: Selection[] = [
        {id:1, name: 'Scoop'},
        {id:2, name: 'Flavor'},
        {id:3, name: 'Eyes'},
        {id:4, name: 'Mouth'},
        {id:5, name: 'Cone'},
        {id:6, name: 'Wrapper'},
        {id:7, name: 'Background'}
    ];

    const [selected, setSelected] = useState<Selection | null>(null)

    function handleSelectClick(selection: Selection) {
        setSelected(selection);
    };

    return (
        <>
            <h2 className="font-extrabold text-4xl text-decoration: underline">
                Options
            </h2>
            <div>
                {selections.map((selection) => (
                    <button className="bg-amber-600/75 hover:bg-amber-900/75 text-white px-4 py-2 m-1 rounded-b-3xl cursor-pointer" key={selection.id} onClick={() => handleSelectClick(selection)}>
                        {selection.name}
                    </button>
                )
            )}
            </div>
            {selected && (
                <SelectionContainer selection={selected.name}
                />
            )}
        </>
    )
};

export default Options;