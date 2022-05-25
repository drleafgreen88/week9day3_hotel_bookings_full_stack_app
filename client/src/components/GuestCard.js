import './GuestCard.css'

const GuestCard = ({ guest, deleteGuest, updateGuest }) => {

    const handleDeleteClick = () => {
        deleteGuest(guest._id)
    }

    const handleUpdateClick = () => {
        updateGuest(guest._id)
    }



    return (
        <div className="guest-card">
            <h3>{guest.name}</h3>
            <p>Email: {guest.email}</p>
            <p>Checked In: {guest.checkedInStatus}</p>
            <button
                type="button"
                className="delete-btn"
                onClick={handleDeleteClick}
            >
            </button>
            <button
                type="button"
                className="update-btn"
                onClick={handleUpdateClick}
            >
            </button>
        </div>
    )
}





export default GuestCard