import { CVProfessionalItem } from "./CVProfessionalItem";
function CVProfessionalList(props) {
    const { professional } = props;
    return (
        <>
            {professional.length ? (
                <div>
                    <h3 className="title">Professional Experience</h3>
                    {professional.map((item) => (
                        <CVProfessionalItem key={item.id} {...item} />
                    ))}
                </div>
            ) : null}
        </>
    );
}

export { CVProfessionalList };
