class ContactsResponse {
    constructor(contact) {
            this.email = contact.email,
            this.phone = contact.phone,
            this.firstName = contact.firstName,
            this.lastName = contact.lastName,
            this.id = contact.id
    }

    // addField(customFieldId, fieldValue, accountId, fieldCurrency) {
    //     const field = {
    //         customFieldId: customFieldId,
    //         fieldValue: fieldValue,
    //         accountId: accountId
    //     };
    //     if (fieldCurrency) {
    //         field.fieldCurrency = fieldCurrency;
    //     }
    //     this.account.fields.push(field);
    // }

    //addLinks() {}

}



module.exports = ContactsResponse
