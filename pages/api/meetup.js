import dbConnect from '../../utils/connect';
dbConnect();

import MeetUp from '../../models/MeetUp';

export default async function handler(req, res) {
    switch (req.method) {
        // Add New MeetUp
        case "POST":
            const { title, image, address, description } = req.body;
            try {
                const data = await MeetUp({
                    title,
                    image,
                    address,
                    description
                })
                await data.save();
                res.status(201).json(data);
            } catch (e) {
                res.status(400).json(e);
                console.log(e)
            }
            break;

        // GET All Meetups
        case "GET":
            try {
                const data = await MeetUp.find()
                res.status(200).json({ data, count: data.length });
            } catch (e) {
                res.status(400).json(e);
                console.log(e)
            }
            break;

        default:
            break;
    }
}