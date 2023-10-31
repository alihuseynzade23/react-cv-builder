import "./downloadcv.css";
import JsPDF from "jspdf";
const generatePDF = () => {
    const cv = new JsPDF("portrait", "pt", "a4");
    cv.html(document.querySelector(".wrapper")).then(() => {
        cv.save("cv.pdf");
    });
};
function DownloadCV() {
    return (
        <div className="card reset-container card-container">
            <div>
                <h4 style={{ fontStyle: "italic" }}>Save your resume</h4>
            </div>
            <div>
                <button className="save-button" onClick={generatePDF}>
                    Download
                </button>
            </div>
        </div>
    );
}
export { DownloadCV };
