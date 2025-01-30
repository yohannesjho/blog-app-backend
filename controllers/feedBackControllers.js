const feedBackServices = require('../services/feedBackServices')

const createFeedback = async (req, res) => {
    try {
        const { name, email, message } = req.body

        const createdFeedback = await feedBackServices.createFeedback(name, email, message)

        res.status(201).json({message:"you send a message succussfully!"})
    } catch (error) {
        res.status(error?.status || 500).json({message:error?.message || "server error" })
    }
}

const getFeedBacks = async (req, res) => {
    try {
        const feedBacks = await feedBackServices.getFeedBacks()

        res.status(200).json({feedBacks:feedBacks})
    } catch (error) {
        res.status(500).json({ message:"server error" })
    }
}

module.exports = {createFeedback, getFeedBacks}