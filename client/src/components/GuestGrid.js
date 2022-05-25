import './GuestGrid.css'
import { useState } from 'react';
import GuestCard from './GuestCard';

const GuestGrid = ({ guests, deleteGuest, updateGuest }) => {



    return (
        <div className="guest-wrapper">
            {guests.map(guest => {
                return (
                    <GuestCard
                        key={guest._id}
                        guest={guest}
                        deleteGuest={deleteGuest}
                        updateGuest={updateGuest}
                    />
                )
            })}
        </div>
    )
}




export default GuestGrid