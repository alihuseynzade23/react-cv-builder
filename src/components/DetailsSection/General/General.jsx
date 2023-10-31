import { useState, useRef } from "react";
import "./general.css";

function General(props) {
    const [state, setState] = useState({
        fullname: "",
        email: "",
        phone: "",
        city: "",
    });

    const [buttonClicked, setButtonClicked] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const arrowRef = useRef(null);

    const toggleForm = () => {
        setButtonClicked(!buttonClicked);
        if (!buttonClicked) {
            arrowRef.current.style.rotate = "180deg";
        } else {
            arrowRef.current.style.rotate = "0deg";
        }
    };

    const formSubmit = (e) => {
        e.preventDefault();
        setButtonClicked(!buttonClicked);
        setIsFilled(true);
        arrowRef.current.style.rotate = "0deg";
        props.generalData(state);
    };

    const handleButton = () => {
        if (fullname === "" || phone === "" || city === "" || email === "") {
            return true;
        } else {
            // submitRef.current.style.backgroundColor = "#de2475";
            // submitRef.current.style.cursor = "pointer";
            return false;
        }
    };

    const handleEdit = () => {
        setButtonClicked(!buttonClicked);
        arrowRef.current.style.rotate = "180deg";
    };

    const { fullname, phone, email, city } = state;
    return (
        <div
            className="card"
            style={{ display: "block", marginBottom: "2rem" }}
        >
            <div className="general-container card-container">
                <div className="left-section">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.5em"
                        viewBox="0 0 448 512"
                    >
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                    <h1>General Information</h1>
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
                        <label htmlFor="full_name">Full name</label>
                        <input
                            id="full_name"
                            name="full_name"
                            onChange={(e) =>
                                setState({ ...state, fullname: e.target.value })
                            }
                            value={fullname}
                            placeholder="Enter your full name"
                            type="text"
                        />
                    </div>
                    <div className="form-content">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) =>
                                setState({ ...state, email: e.target.value })
                            }
                            value={email}
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="text"
                        />
                    </div>
                    <div className="form-content">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            onChange={(e) =>
                                setState({ ...state, phone: e.target.value })
                            }
                            value={phone}
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            type="text"
                        />
                    </div>
                    <div className="form-content">
                        <label htmlFor="city">City and Province</label>
                        <input
                            onChange={(e) =>
                                setState({ ...state, city: e.target.value })
                            }
                            value={city}
                            id="city"
                            name="city"
                            placeholder="City, Province"
                            type="text"
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
                            <h4>{fullname}</h4>
                            <p>{email}</p>
                            <p>{phone}</p>
                            <p>{city}</p>
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

export { General };
