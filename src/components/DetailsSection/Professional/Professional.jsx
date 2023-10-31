import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProfessionalList } from "./ProfessionalList";

function Professional(props) {
    const [state, setState] = useState([]);
    const [job, setJob] = useState("");
    const [company, setCompany] = useState("");
    const [jobStartDate, setjobStartDate] = useState("");
    const [jobEndDate, setjobEndDate] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);
    const [edit, setEdit] = useState(false);
    const arrowRef = useRef(null);

    const toggleForm = () => {
        setEdit(false);
        setJob("");
        setCompany("");
        setjobStartDate("");
        setjobEndDate("");
        setDescription("");
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
        setState((prevState) => [
            ...prevState,
            {
                id: uuidv4(),
                job: job,
                company: company,
                jobStartDate: jobStartDate,
                jobEndDate: jobEndDate,
                description: description,
            },
        ]);
        arrowRef.current.style.transform = "rotate(0deg)";
        setJob("");
        setCompany("");
        setjobStartDate("");
        setjobEndDate("");
        setDescription("");
    };

    const handleButton = () => {
        if (job === "" || company === "" || description === "") {
            return true;
        } else {
            return false;
        }
    };

    const handleEdit = (
        id,
        job,
        company,
        jobStartDate,
        jobEndDate,
        description
    ) => {
        setEdit(!edit);
        arrowRef.current.style.transform = "rotate(180deg)";
        setJob(job);
        setId(id);
        setCompany(company);
        setjobStartDate(jobStartDate);
        setjobEndDate(jobEndDate);
        setDescription(description);
    };

    const deleteInfo = () => {
        setEdit(false);
        const newState = state.filter((el) => el.id !== id);
        setState(newState);
        setJob("");
        setCompany("");
        setjobEndDate("");
        setjobStartDate("");
        setDescription("");
        arrowRef.current.style.transform = "rotate(0deg)";
    };

    const saveEdit = () => {
        const updatedState = state.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    job: job,
                    company: company,
                    jobStartDate: jobStartDate,
                    jobEndDate: jobEndDate,
                    description: description,
                };
            }
            return item;
        });

        setState(updatedState);
        setEdit(false);
        setJob("");
        setCompany("");
        setjobStartDate("");
        setjobEndDate("");
        arrowRef.current.style.transform = "rotate(0deg)";
    };

    useEffect(() => {
        props.professionalData(state);
    }, [state]);

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
                    <div className="form-content">
                        <label htmlFor="jobStartDate">Start Date</label>
                        <input
                            type="date"
                            name="jobStartDate"
                            id="jobStartDate"
                            value={jobStartDate}
                            onChange={(e) => setjobStartDate(e.target.value)}
                        />
                    </div>

                    <div className="form-content">
                        <label htmlFor="jobEndDate">End Date</label>
                        <input
                            type="date"
                            name="jobEndDate"
                            id="jobEndDate"
                            value={jobEndDate}
                            onChange={(e) => setjobEndDate(e.target.value)}
                        />
                    </div>

                    <div className="form-content">
                        <label htmlFor="description">Description</label>
                        <input
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            id="description"
                            name="description"
                            placeholder="Main tasks"
                            type="text"
                        />
                    </div>
                    <button disabled={handleButton()} className="submitBtn">
                        Save
                    </button>
                </form>
            )}
            {edit && (
                <form id="form" onSubmit={(e) => e.preventDefault()} action="">
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
                    <div className="form-content">
                        <label htmlFor="jobStartDate">Start Date</label>
                        <input
                            type="date"
                            name="jobStartDate"
                            id="jobStartDate"
                            value={jobStartDate}
                            onChange={(e) => setjobStartDate(e.target.value)}
                        />
                    </div>

                    <div className="form-content">
                        <label htmlFor="jobEndDate">End Date</label>
                        <input
                            type="date"
                            name="jobEndDate"
                            id="jobEndDate"
                            value={jobEndDate}
                            onChange={(e) => setjobEndDate(e.target.value)}
                        />
                    </div>

                    <div className="form-content">
                        <label htmlFor="description">Description</label>
                        <input
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            id="description"
                            name="description"
                            placeholder="Main tasks"
                            type="text"
                        />
                    </div>
                    <div className="buttons">
                        <button
                            onClick={saveEdit}
                            disabled={handleButton()}
                            className="submitBtn"
                        >
                            Save
                        </button>
                        <button onClick={() => deleteInfo(id)}>Delete</button>
                    </div>
                </form>
            )}

            {state ? (
                <ProfessionalList
                    deleteInfo={deleteInfo}
                    handleEdit={handleEdit}
                    state={state}
                />
            ) : null}
        </div>
    );
}
export { Professional };
