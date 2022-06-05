import React from 'react';


function FormAdditionalOptions({refPizzaSlices, setQntOfSlices, refPizzaDiameter, setPizzaDiameter, refSoupSpiciness, setSoupSpiciness, soupSpiciness, refBreadSlices, setBreadSlices}) {
    return (
        <>
            <label
                htmlFor="qnt-of-slices"
                className="show-option option-pizza"
                ref={refPizzaSlices}
            >
                <h5>Number of slices:</h5>
                <input
                    type="number"
                    defaultValue="0"
                    min="0"
                    id="qnt-of-slices"
                    name="qnt-of-slices"
                    onChange={(e) => setQntOfSlices(e.target.value)}
                />
            </label>
            <label
                htmlFor="diameter"
                className="show-option option-pizza"
                ref={refPizzaDiameter}
            >
                <h5>Diameter:</h5>
                <input
                    type="number"
                    defaultValue="0.00"
                    min="0.0"
                    step="0.1"
                    id="diameter"
                    name="diameter"
                    onChange={(e) => setPizzaDiameter(e.target.value)}
                />
            </label>
            <label
                htmlFor="soup-spiciness"
                className="show-option option-soup"
                ref={refSoupSpiciness}
            >
                <h5>Soup spiciness ({soupSpiciness}):</h5>
                <input
                    type="range"
                    defaultValue="1"
                    min="1"
                    max="10"
                    id="soup-spiciness"
                    name="soup-spiciness"
                    onChange={(e) => setSoupSpiciness(e.target.value)}
                />
            </label>
            <label
                htmlFor="bread-slices"
                className="show-option option-sandwich"
                ref={refBreadSlices}
            >
                <h5>Slices of bread:</h5>
                <input
                    type="number"
                    defaultValue="0"
                    min="0"
                    id="bread-slices"
                    name="bread-slices"
                    onChange={(e) => setBreadSlices(e.target.value)}
                />
            </label>
        </>
    );
}

export default FormAdditionalOptions;