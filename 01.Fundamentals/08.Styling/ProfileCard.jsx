const ProfileCard = () => {
    const styles = {
        backgroundColor: "lightGray",
        padding: "15px",
        borderRadius: "8px",
        color: "black"
    }
    return (
        <div style={styles}>
            <h2>Harry Potter</h2>
            <p>An English Fantasy book about a wizard in his journey to defeat the dark lord</p>
        </div>
    )
}

export default ProfileCard