import { getDb } from "./db";

export default async function getReqHistory(req, res) {
    const dbconnection = await getDb();
    try {
        const query = "SELECT VOLUNTEER.name,INCHARGE.rating FROM INCHARGE, VOLUNTEER where VID=volunteerID";
        const value = [];
        const [data] = await dbconnection.execute(query, value);
        res.status(200).json({ results: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}