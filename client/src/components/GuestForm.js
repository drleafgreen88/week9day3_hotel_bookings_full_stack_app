import './GuestForm.css';
import { useState } from 'react';
import GuestCard from './GuestCard';

const GuestForm = ({ addGuest }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [checkedInStatus, setCheckedInStatus] = useState("")

    const handleNameChange = event => setName(event.target.value)
    const handleEmailChange = event => setEmail(event.target.value)
    const handlecheckedInStatusChange = event => setCheckedInStatus(event.target.value)


    const handleSubmit = event => {
        event.preventDefault()
        const guest = {
            name,
            email,
            checkedInStatus
        }
        addGuest(guest)
        setName("")
        setEmail("")
        setCheckedInStatus("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
            />

            <label htmlFor="email">Email:</label>
            <input
                type="text"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
            />

            <label htmlFor="checkedInStatus">Checked In Status:</label>
            <input
                type="text"
                id="checkedInStatus"
                value={checkedInStatus}
                onChange={handlecheckedInStatusChange}
                required
            />

            <input type="submit" name="submit" value="Save" />
        </form>
    )

}

export default GuestForm