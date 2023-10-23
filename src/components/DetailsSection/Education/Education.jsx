import { useState, useRef, useEffect } from "react";
import { format } from "date-fns";

import "./education.css";

function Education(props) {
    const [state, setState] = useState({
        degree: "",
        school: "",
        cityUni: "",
        country: "",
        startDate: "",
        endDate: "",
    });

    const [buttonClicked, setButtonClicked] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const arrowRef = useRef(null);

    const toggleForm = () => {
        setButtonClicked(!buttonClicked);
        if (!buttonClicked) {
            arrowRef.current.style.transform = "rotate(180deg)";
        } else {
            arrowRef.current.style.transform = "rotate(0deg)";
        }
    };

    const formSubmit = (e) => {
        e.preventDefault();
        setButtonClicked(!buttonClicked);
        setIsFilled(true);
        setState({
            ...state,
            startDate: state.startDate,
            endDate: state.endDate,
        });
        arrowRef.current.style.transform = "rotate(0deg)";
        props.educationData(state);
    };

    const handleButton = () => {
        const { degree, school, cityUni, country, startDate, endDate } = state;
        if (
            degree === "" ||
            school === "" ||
            cityUni === "" ||
            country === "" ||
            startDate === "" ||
            endDate === ""
        ) {
            return true;
        } else {
            return false;
        }
    };

    const handleEdit = () => {
        setButtonClicked(!buttonClicked);
        arrowRef.current.style.transform = "rotate(180deg)";
    };

    useEffect(() => {
        if (state.startDate && state.endDate) {
            setState({
                ...state,
                startDate: format(new Date(state.startDate), "yyyy-MM-dd"),
                endDate: format(new Date(state.endDate), "yyyy-MM-dd"),
            });
        }
    }, []);

    const { degree, school, cityUni, country, startDate, endDate } = state;

    return (
        <div className="card" style={{ display: "block" }}>
            <div className="general-container card-container">
                <div className="left-section">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.5em"
                        viewBox="0 0 640 512"
                    >
                        <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
                    </svg>
                    <h1>Education Experience</h1>
                </div>
                <div className="right-section">
                    <svg
                        ref={arrowRef}
                        onClick={toggleForm}
                        className="svg"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                    >
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                </div>
            </div>

            {buttonClicked && (
                <form onSubmit={formSubmit} id="form" action="">
                    <div className="form-content">
                        <label htmlFor="degree">Degree</label>
                        <input
                            id="degree"
                            name="degree"
                            onChange={(e) =>
                                setState({ ...state, degree: e.target.value })
                            }
                            value={degree}
                            placeholder="Enter Degree / Field of Study"
                            type="text"
                        />
                    </div>
                    <div className="form-content">
                        <label htmlFor="school">School</label>
                        <input
                            onChange={(e) =>
                                setState({ ...state, school: e.target.value })
                            }
                            value={school}
                            id="school"
                            name="school"
                            placeholder="Enter school / university"
                            type="text"
                        />
                    </div>
                    <div className="form-content">
                        <label htmlFor="cityUni">City</label>
                        <input
                            onChange={(e) =>
                                setState({ ...state, cityUni: e.target.value })
                            }
                            value={cityUni}
                            id="cityUni"
                            name="cityUni"
                            placeholder="Enter city"
                            type="text"
                        />
                    </div>
                    <div className="form-content">
                        <label htmlFor="country">Enter country</label>
                        <input
                            onChange={(e) =>
                                setState({ ...state, country: e.target.value })
                            }
                            value={country}
                            id="country"
                            name="country"
                            placeholder="Enter Country"
                            type="text"
                        />
                    </div>
                    <div className="form-content">
                        <label htmlFor="startDate">Start Date</label>
                        <input
                            type="date"
                            name="startDate"
                            id="startDate"
                            value={state.startDate}
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    startDate: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="form-content">
                        <label htmlFor="endDate">End Date</label>
                        <input
                            type="date"
                            name="endDate"
                            id="endDate"
                            value={state.endDate}
                            onChange={(e) =>
                                setState({ ...state, endDate: e.target.value })
                            }
                        />
                    </div>
                    <button disabled={handleButton()} className="submitBtn">
                        Save
                    </button>
                </form>
            )}
            {isFilled && (
                <div>
                    <hr />
                    <div className="edit-section">
                        <div className="edit-left">
                            <h4>{degree}</h4>
                            <p>{school}</p>
                            <p>{cityUni}</p>
                            <p>{country}</p>
                            <p>
                                {startDate.slice(0, 4)} - {endDate.slice(0, 4)}
                            </p>
                        </div>
                        <div className="edit-right">
                            <button
                                style={{ cursor: "pointer" }}
                                className="edit"
                                onClick={handleEdit}
                            >
                                <svg
                                    style={{ paddingRight: ".7rem" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                                </svg>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export { Education };
