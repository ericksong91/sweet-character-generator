'use client'

type Selection = {
    id: number;
    name: string;
};

function Options() {
    const selections: Selection[] = [
        { id: 1, name: 'Scoop' },
        { id: 2, name: 'Flavor' },
        { id: 3, name: 'Eyes' },
        { id: 4, name: 'Mouth' },
        { id: 5, name: 'Cone' },
        { id: 6, name: 'Wrapper' },
        { id: 7, name: 'Background' }
    ]; // Defined type up top, the array brackets next to the : Selection[] lets TypeScript know that it is looking at an Array with elements
    // that have this type, Selection.

    function handleSelect(selections: Selection) {
        alert(`Choose your ${selections.name}!`);
    };

    return (
        <>
            <h2 className="font-extrabold text-4xl text-decoration: underline">
                Options
            </h2>
            <div>
                {selections.map((selection) => (
                    <button className="bg-amber-600/75 hover:bg-amber-900/75 text-white px-4 py-2 m-1 rounded-b-3xl cursor-pointer" key={selection.id} onClick={() => handleSelect(selection)}>
                        {selection.name}
                    </button>
                ))}
            </div>
        </>
    )
};

export default Options;