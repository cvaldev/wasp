import mysql from "mysql2/promise";

export default async function handler(req, res) {
    const dbconnection = await mysql.createConnection ({
        host: "localhost",
        database: "wasp_user",
        port: 3306,
        user: "root",
        password: "password",
        socketPath: "/src/components/waspDB.mysql"
    });
    try {
        const query = "SELECT * from SENIOR"
        const value = []
        const [results] = await dbconnection.execute(query, values);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
    res.status(200).json({ name: "John Doe" });
  }