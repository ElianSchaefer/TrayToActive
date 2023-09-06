class AccountResponse {
    constructor(name, accountUrl, createdTimestamp, updatedTimestamp, id) {
        this.account = {
            name: name,
            accountUrl: accountUrl,
            createdTimestamp: createdTimestamp,
            updatedTimestamp: updatedTimestamp,
            links: [],
            fields: [],
            id: id
        };
    }

    addField(customFieldId, fieldValue, accountId, fieldCurrency) {
        const field = {
            customFieldId: customFieldId,
            fieldValue: fieldValue,
            accountId: accountId
        };
        if (fieldCurrency) {
            field.fieldCurrency = fieldCurrency;
        }
        this.account.fields.push(field);
    }

    addLinks() {}

}

class AccountResponseError{
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

module.exports = AccountResponse, AccountResponseError
