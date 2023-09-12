class ContactTagResponse {
    constructor(contact) {
            this.email = contact.email,
            this.phone = contact.phone,
            this.firstName = contact.firstName,
            this.lastName = contact.lastName,
            this.id = contact.id
    }
}



module.exports = ContactTagResponse
