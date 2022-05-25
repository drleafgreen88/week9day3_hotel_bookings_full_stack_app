import { useState, useEffect } from 'react'
import GuestForm from '../components/GuestForm'
import GuestGrid from '../components/GuestGrid'
import GuestService from '../services/GuestService'
import GuestCard from '../components/GuestCard'

const GuestContainer = () => {


    const [guests, setGuests] = useState([])

    useEffect(() => {
        GuestService.getGuests()
            .then(guests => setGuests(guests))
    }, [])

    const addGuest = newGuest => {
        GuestService.postGuest(newGuest)
            .then(savedGuest => setGuests([...guests, savedGuest]))
    }

    const deleteGuest = idToDelete => {
        GuestService.deleteGuest(idToDelete)
            .then(() => {
                setGuests(guests.filter(guest => guest._id !== idToDelete))
            })
    }

    


    return (
        <>
            <h1>Hotel California</h1>
            <GuestForm addGuest={addGuest} />
            <GuestGrid deleteGuest={deleteGuest} guests={guests} updateGuest={updateGuest} />
        </>
    )

}



export default GuestContainer