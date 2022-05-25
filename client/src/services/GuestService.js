const baseURL = 'http://localhost:9000/api/guests'

const GuestService = {
    getGuests() {
        return fetch(baseURL)
        .then(res => res.json())
    },

    postGuest(payload) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },

    deleteGuest(id) {
        return fetch(baseURL + "/" + id, {
            method: 'DELETE'
        })
    }
}

export default GuestService
