import React from 'react';


function FormInputsAndOptions({courseName, setCourseName, cookingTime, setCookingTime, setCourseType, showOptions}) {
    return (
        <>
            <label htmlFor="course-name" className="course-name">
                <h5>Name:</h5>
                <input
                    type="text"
                    id="course-name"
                    name="course-name"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                />
            </label>
            <label htmlFor="cooking-time" className="cooking">
                <h5>Cooking time:</h5>
                <input
                    type="time"
                    defaultValue={cookingTime}
                    step="1"
                    id="cooking-time"
                    name="cooking-time"
                    onChange={(e) => setCookingTime(e.target.value)}
                />
            </label>
            <label htmlFor="course-type" className="course-type">
                <h5>Type:</h5>
                <select
                    id="course-type"
                    onChange={(e) => {
                        setCourseType(e.target.options[e.target.selectedIndex].value);
                        showOptions(
                            e.target.options[e.target.selectedIndex].value
                        );
                    }}
                >
                    <option value="">-</option>
                    <option value="pizza">Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="sandwich">Sandwich</option>
                </select>
            </label>
        </>
    );
}

export default FormInputsAndOptions;