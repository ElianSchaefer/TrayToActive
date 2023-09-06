class ContactsResponseError {
    constructor(title, detail, code, error, pointer) {
       this.error =[ {
            title : title || '',
                detail : detail || '',
                code : code || '',
                error : error || '',
                source : {
                    pointer: pointer || ''
                }
        }
    ];
    }
}



module.exports = ContactsResponseError
