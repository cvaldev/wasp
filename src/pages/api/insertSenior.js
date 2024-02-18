import mysql from "mysql2/promise";

export default async function insertSenior(req, res) {
    const dbconnection = await mysql.createConnection ({
        host: "sql5.freemysqlhosting.net",
        database: "sql5684859",
        user: 'sql5684859',
        password: 'ecShk75Znf',
        port: 3306
    });
    try {
        console.log(req.body);
        const value = req.body;
        const query = "insert into SENIOR values('181818','" + value.seniorName
        + "','" + value.seniorEmail+ "','" + value.seniorAddress + "')"
        
        const [data] = await dbconnection.execute(query);
        res.status(200);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
  }