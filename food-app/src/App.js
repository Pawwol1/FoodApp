import React, { useState, useRef } from "react";
import "./App.scss";
import { approveForm } from "./Components/ApproveForm";
import FormInputsAndOptions from "./Components/FormInputsAndOptions";
import FormAdditionalOptions from "./Components/FormAdditionalOptions";

export default function App() {
    const [courseName, setCourseName] = useState("");
    const [cookingTime, setCookingTime] = useState("00:00:00");
    const [courseType, setCourseType] = useState("");
    const [qntOfSlices, setQntOfSlices] = useState(0);
    const [pizzaDiameter, setPizzaDiameter] = useState(0);
    const [soupSpiciness, setSoupSpiciness] = useState(1);
    const [breadSlices, setBreadSlices] = useState(0);
    const [info, setInfo] = useState("");
    const refInfoHeader = useRef(null);
    const refInfoContainer = useRef(null);
    const refPizzaSlices = useRef(null);
    const refPizzaDiameter = useRef(null);
    const refSoupSpiciness = useRef(null);
    const refBreadSlices = useRef(null);

    const sendCourse = async (course) => {
        console.log(JSON.stringify(course));
        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(course),
        };
        try {
            await fetch(
                "https://frosty-wood-6558.getsandbox.com:443/dishes",
                request
            );
            changeInfo(true, "Success! Course has been added.");
        } catch (err) {
            changeInfo(false, "Connection issues. Please try again later");
        }
    };

    const changeInfo = (isCorrectInfo, infoText) => {
        if (isCorrectInfo === false) {
            refInfoHeader.current.style.color = "rgba(255, 0, 0, 0.5)";
            setInfo(infoText);
        } else if (isCorrectInfo === true) {
            refInfoHeader.current.style.color = "rgba(100, 255, 100, 0.8)";
            setInfo(infoText);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        const course = {
            name: courseName,
            preparation_time: cookingTime,
            type: courseType,
            ...(courseType === "pizza" && { diameter: Number(pizzaDiameter) }),
            ...(courseType === "pizza" && { no_of_slices: Number(qntOfSlices) }),
            ...(courseType === "soup" && { spiciness_scale : Number(soupSpiciness) }),
            ...(courseType === "sandwich" && { slices_of_bread: Number(breadSlices),
            }),
        };
        const [isApproved, error] = approveForm(course);
        refInfoContainer.current.style.display = "block";
        if (isApproved) {
            sendCourse(course);
        } else {
            changeInfo(false, error);
        }
    };

    const showOptions = (type) => {
        const refs = [
            refPizzaSlices,
            refPizzaDiameter,
            refSoupSpiciness,
            refBreadSlices,
        ];
        const optionsTempType = refs.filter((el) =>
            [...el.current.classList].includes(`option-${type}`)
        );
        const additionalOptions = refs.filter((el) => !optionsTempType.includes(el));
        optionsTempType.forEach((el) => (el.current.style.display = "flex"));
        additionalOptions.forEach((el) => (el.current.style.display = "none"));
    };

    return (
            <form className="form_container" autoComplete="off">
                <h1 className="header">Choose a main course</h1>
                <FormInputsAndOptions
                    courseName={courseName}
                    setCourseName={setCourseName}
                    cookingTime={cookingTime}
                    setCookingTime={setCookingTime}
                    setCourseType={setCourseType}
                    showOptions={showOptions}
                />
                <FormAdditionalOptions
                    refPizzaSlices={refPizzaSlices}
                    setQntOfSlices={setQntOfSlices}
                    refPizzaDiameter={refPizzaDiameter}
                    setPizzaDiameter={setPizzaDiameter}
                    refSoupSpiciness={refSoupSpiciness}
                    soupSpiciness={soupSpiciness}
                    setSoupSpiciness={setSoupSpiciness}
                    refBreadSlices={refBreadSlices}
                    setBreadSlices={setBreadSlices}
                />
                <div className="info-container" ref={refInfoContainer}>
                    <h2 className="info-message" ref={refInfoHeader}>
                        {info}
                    </h2>
                </div>
                <div className="btn-container">
                    <input
                        type="submit"
                        value="Send"
                        className="btn"
                        onClick={submit}
                    />
                </div>
            </form>
    );
}