import pool from "../db/mysql";

export default defineEventHandler(async (event) => {
    let result
    const params = getQuery(event);
    const {login} = params
    const date = new Date(Date.now())

    const query = `SELECT datetime, clientid, number, operator, service, code, text, hidden, numActivation, country FROM handAPI
    WHERE id = '${login}'`
    await pool.query(query).then((data) =>{result = data[0]}).catch((err) => console.log(err));

    return result
})
