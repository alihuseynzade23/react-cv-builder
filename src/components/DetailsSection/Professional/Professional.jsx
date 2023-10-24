import { useState, useRef, useEffect } from "react";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";

function Professional(props) {
    const [state, setState] = useState([]);
    const [job, setJob] = useState("");
    const [company, setCompany] = useState("");

    const [buttonClicked, setButtonClicked] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [edit, setEdit] = useState(false);
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

        setState((prevState) => [...prevState, { id: uuidv4(), job, company }]);
        arrowRef.current.style.transform = "rotate(0deg)";
        props.professionalData(state);
    };

    const handleButton = () => {
        // const { job, company, description, jobStartDate, jobEndDate } = state;
        if (
            job === "" ||
            company === ""
            // description === "" ||
            // jobStartDate === "" ||
            // jobEndDate === ""
        ) {
            return true;
        } else {
            return false;
        }
    };

    const handleEdit = () => {
        setEdit(!edit);
        arrowRef.current.style.transform = "rotate(180deg)";
    };

    // useEffect(() => {
    //     if (state.jobStartDate && state.jobEndDate) {
    //         setState({
    //             ...state,
    //             jobStartDate: format(
    //                 new Date(state.jobStartDate),
    //                 "yyyy-MM-dd"
    //             ),
    //             jobEndDate: format(new Date(state.jobEndDate), "yyyy-MM-dd"),
    //         });
    //     }
    // }, []);

    // const { job, company, description, jobStartDate, jobEndDate } = state;

    return (
        <div className="card" style={{ display: "block" }}>
            <div className="general-container card-container">
                <div className="left-section">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.5em"
                        viewBox="0 0 512 512"
                    >
                        <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                    </svg>
                    <h1>Professional Experience</h1>
                </div>
                <div className="right-section">
                    <svg
                        onClick={toggleForm}
                        ref={arrowRef}
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
                        <label htmlFor="job">Job Title</label>
                        <input
                            id="job"
                            name="job"
                            onChange={(e) => setJob(e.target.value)}
                            value={job}
                            placeholder="Enter Job Title"
                            type="text"
                        />
                    </div>
                    <div className="form-content">
                        <label htmlFor="company">Company</label>
                        <input
                            onChange={(e) => setCompany(e.target.value)}
                            value={company}
                            id="company"
                            name="company"
                            placeholder="Enter Company"
                            type="text"
                        />
                    </div>
                    <button disabled={handleButton()} className="submitBtn">
                        Save
                    </button>
                </form>
            )}
            {edit && (
                <form id="editForm" action="">
                    {state.map((element) => (
                        <>
                            <div className="form-content">
                                <label htmlFor="job">Job Title</label>
                                <input
                                    id="job"
                                    name="job"
                                    onChange={(e) => setJob(e.target.value)}
                                    value={element.job}
                                    placeholder="Enter Job Title"
                                    type="text"
                                />
                            </div>
                            <div className="form-content">
                                <label htmlFor="company">Company</label>
                                <input
                                    onChange={(e) => setCompany(e.target.value)}
                                    value={element.company}
                                    id="company"
                                    name="company"
                                    placeholder="Enter Company"
                                    type="text"
                                />
                            </div>
                            <button
                                disabled={handleButton()}
                                className="submitBtn"
                            >
                                Save
                            </button>
                        </>
                    ))}
                </form>
            )}

            {/*
                    <div className="form-content">
                        <label htmlFor="jobStartDate">Start Date</label>
                        <input
                            type="date"
                            name="jobStartDate"
                            id="jobStartDate"
                            value={jobStartDate}
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    jobStartDate: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="form-content">
                        <label htmlFor="jobEndDate">End Date</label>
                        <input
                            type="date"
                            name="jobEndDate"
                            id="jobEndDate"
                            value={jobEndDate}
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    jobEndDate: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form-content">
                        <label htmlFor="description">Description</label>
                        <input
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    description: e.target.value,
                                })
                            }
                            value={description}
                            id="description"
                            name="description"
                            placeholder="Main tasks"
                            type="text"
                        />
                    </div> */}

            {isFilled && (
                <div>
                    <hr />
                    {state.map((element) => {
                        return (
                            <div key={element.id} className="edit-section">
                                <div className="edit-left">
                                    <h4>{element.job}</h4>
                                    <p>{element.company}</p>
                                    {/* <p>
                                        {jobStartDate.slice(0, 4)}
                                        {jobEndDate.slice(0, 4)}
                                    </p>
                                    <p>{description}</p> */}
                                </div>
                                <div className="edit-right">
                                    <button
                                        style={{ cursor: "pointer" }}
                                        className="edit"
                                        onClick={handleEdit}
                                        onc
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
                        );
                    })}
                </div>
            )}
        </div>
    );
}
export { Professional };

{
    /* <div className="edit-section">
                        <div className="edit-left">
                            <h4>{job}</h4> */
}
{
    /* <p>{company}</p> */
}
{
    /* <p>
                                {jobStartDate.slice(0, 4)} -{" "}
                                {jobEndDate.slice(0, 4)}
                            </p>
                            <p>{description}</p> */
}
{
    /* </div>
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
                    </div> */
}
