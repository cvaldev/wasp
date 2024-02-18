import { getDb } from "./db";

export default async function insertSenior(req, res) {
    const dbconnection = await getDb();
    try {
        //check 
        const value = req.body;
        const querySenior = "insert into SENIOR(name,city,email,phone) values('" + value.seniorName
        + "','" + value.seniorAddress+ "','" + value.seniorEmail + "','" + value.seniorPhone + "')";
        const [data] = await dbconnection.execute(querySenior);
        console.log(data);
        
        const SID = data.insertId;
        const queryGuardian = "insert into GUARDIAN(name,phone,email,SID) values('" + value.name
        + "','" + value.phone + "','" + value.email + "','" + SID + "')";
        const [data2] = await dbconnection.execute(queryGuardian);
        console.log(data2);
        res.status(200);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
  }