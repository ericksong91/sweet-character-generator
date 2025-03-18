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
        alert(`Choose your ${selections.name}!`);
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
                    <button className="bg-amber-600/75 hover:bg-amber-900/75 text-white px-4 py-2 m-1 rounded-b-3xl cursor-pointer" key={selection.id} onClick={() => handleSelect(selection)}>
                        {selection.name}
                    </button>
                )
            )}
            </div>
        </>
    )
};

export default Options;