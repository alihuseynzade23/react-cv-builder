import { Education } from "./Education/Education";
import { General } from "./General/General";
import { Professional } from "./Professional/Professional";
import { ResetCv } from "./ResetCv/ResetCv";
import "./details.css";

function Details(props) {
    const { getGeneralData, getEducationData, getProfessionalData } = props;
    return (
        <div className="details-container">
            <ResetCv />
            <General generalData={getGeneralData} />
            <Education educationData={getEducationData} />
            <Professional professionalData={getProfessionalData} />
        </div>
    );
}

export { Details };
