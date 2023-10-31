import { Education } from "./Education/Education";
import { General } from "./General/General";
import { Professional } from "./Professional/Professional";
import { DownloadCV } from "./ResetCv/DownloadCV";
import "./details.css";

function Details(props) {
    const { getGeneralData, getEducationData, getProfessionalData } = props;
    return (
        <div className="details-container">
            <DownloadCV />
            <General generalData={getGeneralData} />
            <Education educationData={getEducationData} />
            <Professional professionalData={getProfessionalData} />
        </div>
    );
}

export { Details };
