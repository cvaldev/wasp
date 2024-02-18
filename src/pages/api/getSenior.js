import mysql from "mysql2/promise";
export default async function getSenior(req, res) {
    const dbconnection = await mysql.createConnection ({
        host: "sql5.freemysqlhosting.net",
        database: "sql5684859",
        user: 'sql5684859',
        password: 'ecShk75Znf',
        port: 3306
    });
    try {
        const query = "SELECT * FROM VOLUNTEER"
        const value = []
        const [data] = await dbconnection.execute(query, value);
        res.status(200).json({ results: data });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
  }