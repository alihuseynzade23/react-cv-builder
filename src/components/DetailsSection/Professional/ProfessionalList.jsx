import { ProfessionalItem } from "./ProfessionalItem";
function ProfessionalList(props) {
    const {
        state = [],
        handleEdit = Function.prototype,
        // deleteInfo = Function.prototype,
    } = props;
    return (
        <>
            {state.map((item) => (
                <ProfessionalItem
                    handleEdit={handleEdit}
                    key={item.id}
                    {...item}
                    // deleteInfo={deleteInfo}
                />
            ))}
        </>
    );
}

export { ProfessionalList };
