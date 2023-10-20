import "./general.css";
import { useState, useRef } from "react";
function General() {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const arrowRef = useRef("0deg");

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
        setButtonClicked(false);
        console.log(fullname);
        console.log(phone);
        console.log(city);
        console.log(email);
        arrowRef.current.style.rotate = "0deg";
    };

    return (
        <div className="card" style={{ display: "block" }}>
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
                            onChange={(e) => setFullName(e.target.value)}
                            value={fullname}
                            placeholder="Enter your full name"
                            type="text"
                        />
                    </div>
                    <div className="form-content">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="text"
                        />
                    </div>
                    <div className="form-content">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            onChange={(e) => setPhone(e.target.value)}
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            type="text"
                        />
                    </div>
                    <div className="form-content">
                        <label htmlFor="city">City and Province</label>
                        <input
                            onChange={(e) => setCity(e.target.value)}
                            id="city"
                            name="city"
                            placeholder="City, Province"
                            type="text"
                        />
                    </div>
                    <button className="submitBtn">Save</button>
                </form>
            )}
        </div>
    );
}

export { General };
