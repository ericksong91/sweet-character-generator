"use client";

function Options () {

    const selections = [
        {id:1, name: 'Scoop'},
        {id:2, name: 'Flavor'},
        {id:3, name: 'Eyes'},
        {id:4, name: 'Mouth'},
        {id:5, name: 'Cone'},
        {id:6, name: 'Wrapper'},
        {id:7, name: 'Background'}
    ]

    function handleSelect(selections: { id: number; name: string}) {
        alert(`Choose a ${selections.name}!`);
    };

    interface Selection {
        id: number;
        name: string;
    }
    // I don't know what this does

    return (
        <>
            <h2>
                Options
            </h2>
            <div>
                {selections.map((selection) => (
                    <button key={selection.id} onClick={() => handleSelect(selection)}>
                        {selection.name}
                    </button>
                )
            )}
            </div>
        </>
    )
};

export default Options;