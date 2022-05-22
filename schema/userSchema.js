const schema = {
    page: {
        key: 0,
        type: 'number'
    },
    per_page: {
        key: 1,
        type: 'number'
    },
    total: {
        key: 2,
        type: 'number'
    },
    total_pages: {
        key: 3,
        type: 'number'
    },
    data: {
        key: 4,
        value: {
            id: {
                key: 0,
                type: 'number'
            },
            email: {
                key: 1,
                type: 'string'
            },
            first_name: {
                key: 2,
                type: 'string'
            },
            last_name: {
                key: 3,
                type: 'string'
            },
            avatar: {
                key: 4,
                type: 'string'
            },
        },
        type: 'array'
    },
    support: {
        key: 5,
        type: 'object',
        value: {
            url: {
                key: 0,
                type: 'string'
            },
            text: {
                key: 1,
                type: 'string'
            }
        }
    }
}

module.exports = {
    userSchema: schema
}