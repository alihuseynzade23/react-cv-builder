function CVProfessionalItem(props) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem 0",
            }}
        >
            <div>
                <span style={{ fontWeight: "bold" }}>{props.job}, </span>
                <span style={{ fontStyle: "italic" }}>{props.company}</span>
                <div>
                    <p style={{ fontSize: ".8rem" }}>{props.description}</p>
                </div>
            </div>
            <div>
                <p>
                    {props.jobStartDate.slice(0, 4)} -{" "}
                    {props.jobEndDate.slice(0, 4)}
                </p>
            </div>
        </div>
    );
}

export { CVProfessionalItem };
