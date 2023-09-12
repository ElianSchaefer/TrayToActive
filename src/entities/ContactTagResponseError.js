class ContactTagResponseError {
    constructor(title, detail, pointer) {
        this.error = [{
            title: title || '',
            detail: detail || '',
            source: {
                pointer: pointer || ''
            }
        }
        ];
    }
}



module.exports = ContactTagResponseError
