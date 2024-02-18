import { getDb } from "./db";

export default async function getRequests(req, res) {
    const dbconnection = await getDb();
    try {
        const query = "SELECT * FROM REQUESTS";
        const value = [];
        const [data] = await dbconnection.execute(query, value);
        res.status(200).json({ results: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
