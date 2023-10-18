import { Info } from "./components/InfoSection/Info";
import { Details } from "./components/DetailsSection/Details";
import { CV } from "./components/CvSection/CV";
import "./app.css";

import { useState } from "react";
function App() {
    return (
        <div className="main-container">
            <Info />
            <Details />
            <CV />
        </div>
    );
}

export default App;
