import { Info } from "./components/InfoSection/Info";
import { Details } from "./components/DetailsSection/Details";
import { CV } from "./components/CvSection/CV";
import "./app.css";
import { useState } from "react";

function App() {
    const [generalState, setGeneralState] = useState({});
    const [educationState, setEducationState] = useState({});
    const [professionalState, setProfessionalState] = useState({});

    const getGeneralData = (data) => {
        setGeneralState(data);
    };

    const getEducationData = (data) => {
        setEducationState(data);
    };

    const getProfessionalData = (data) => {
        setProfessionalState(data);
    };
    return (
        <div className="main-container">
            <Info />
            <Details
                getEducationData={getEducationData}
                getGeneralData={getGeneralData}
                getProfessionalData={getProfessionalData}
            />
            <CV
                professional={professionalState}
                education={educationState}
                general={generalState}
            />
        </div>
    );
}

export default App;
