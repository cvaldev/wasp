import { getDb } from "./db";

export default async function insertVolunteer(req, res) {
    const dbconnection = await getDb();
    try {
        const value = req.body;
        const query =
            "insert into VOLUNTEER(name,city,email,phone) values('" +
            value.name +
            "','" +
            value.city +
            "','" +
            value.phone +
            "','" +
            value.email +
            "')";
        const [data] = await dbconnection.execute(query);
        res.status(200).json({ ok: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}
