import { getDb } from "./db";

export default async function getRequests(req, res) {
    const dbconnection = await getDb();
    try {
        const query = "SELECT requestID, reqStatus, distance FROM REQUESTS, SENIOR where SID=seniorID and seniorID in (select seniorID from SENIOR, VOLUNTEER where city=city)";
        const value = [];
        const [data] = await dbconnection.execute(query, value);
        res.status(200).json({ results: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
