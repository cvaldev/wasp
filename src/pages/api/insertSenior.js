import { getDb } from "./db";

export default async function insertSenior(req, res) {
    const dbconnection = await getDb();
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