import { Education } from "./Education/Education";
import { General } from "./General/General";
import { Professional } from "./Professional/Professional";
import { ResetCv } from "./ResetCv/ResetCv";
import "./details.css";

function Details() {
    return (
        <div className="details-container">
            <ResetCv />
            <General />
            <Education />
            <Professional />
        </div>
    );
}

export { Details };
