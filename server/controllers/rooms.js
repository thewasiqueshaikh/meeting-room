const Rooms = require('../models/rooms');

exports.rooms = (req, res) => {
    Rooms.find()
        .then(result => {
            if (result.length >= 1) {
                res.status(200).json({ message: "Rooms Fetched Sucessfully", isAuthenticated: true, Rooms: result })
            }
            else {
                res.status(200).json({ message: "Rooms Not Found", isAuthenticated: false, Rooms: result })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
}