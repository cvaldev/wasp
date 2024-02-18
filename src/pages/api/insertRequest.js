import { getDb } from "./db";

export default async function insertRequest(req, res) {
    const dbconnection = await getDb();
    try {
        const value = req.body;
        const query =
            "insert into REQUEST(SID, distance) values('" +
            value.seniorID +
            "','" +
            value.distance +
            "')";
        const [data] = await dbconnection.execute(query);
        res.status(200).json({ ok: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}
