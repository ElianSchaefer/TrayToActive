class ContactsResponse {
    constructor(contact) {
            this.email = contact.email,
            this.phone = contact.phone,
            this.firstName = contact.firstName,
            this.lastName = contact.lastName,
            this.idContato = contact.id
            this.idTag = contact.contactTags.tag || '',
            this.idContactTags = contact.contactTags ||'' 
    }
}



module.exports = ContactsResponse
