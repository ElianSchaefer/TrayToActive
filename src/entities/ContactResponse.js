class ContactsResponse {
    constructor(email, phone, firstName, lastName, createdTimestamp, updatedTimestamp, id) {
        this.contact = {
            email:email,
            phone:phone,
            firstName: firstName,
            lastName: lastName,
            createdTimestamp: createdTimestamp,
            updatedTimestamp: updatedTimestamp,
            id: id
        };
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

class ContactsResponseError{
    constructor(title, detail, code, pointer) {
        this.errors = [
            {
                title: title,
                detail: detail,
                code: code,
                source: {
                    pointer: pointer
                }
            }
        ];
    }
}

module.exports = ContactsResponse, ContactsResponseError
