import {createPool} from 'mysql2/promise'

export const pool = createPool ({
    hoost: 'localhoost',
    user: 'root',
    password: 'ReventXz12!',
    port: 3306,
    database: 'companydb'
})

