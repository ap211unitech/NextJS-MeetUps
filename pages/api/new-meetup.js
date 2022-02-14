import MeetUp from '../../models/MeetUp';
import dbConnect from '../../utils/connect';
dbConnect();


export default async function handler(req, res) {
    switch (req.method) {
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
                res.json(data);
            } catch (error) {
                res.json(error);
                console.log(error)
            }
            break;

        default:
            break;
    }
}