const Employee = ({ name, position, salary }) => {
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Position: {position}</p>
            <span>Salary: ${salary}</span>
        </div>
    );
};

export default Employee;