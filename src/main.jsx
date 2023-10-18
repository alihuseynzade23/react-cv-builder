import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
// What Odin Project tells us to do //

// 1. A section to add general information like name, email and phone number.
// 2. A section to add your educational experience (school name, title of study and date of study)
// 3. A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
// 4. Be sure to include an edit and submit button for each section or for the whole CV. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
// 5. Create a components directory under your src directory and add your components.
// 6. Include a styles direct yourory under src directory for your CSS files. You’ll need to import these in the component files to use them.
// 7. Push the results and deploy them with any of the options mentioned below!

// What we will do //
// We will create several components:
// 1. One APP component where we will put all our other components
