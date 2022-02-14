import dbConnect from '../../utils/connect';
dbConnect();

import MeetUp from '../../models/MeetUp';

export default async function handler(req, res) {
    switch (req.method) {
        // GET a MeetUP by ID
        case "POST":
            try {
                const data = await MeetUp.findById(req.body.id);
                res.status(200).json(data);
            } catch (e) {
                res.status(400).json(e);
                console.log(e)
            }
            break;

        default:
            break;
    }
}