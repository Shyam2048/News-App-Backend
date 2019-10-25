import express from 'express'
import * as newsServices from '../services/newsServices'

const router = express.Router()

router.post('/get_news', (req, res, next) => {
    console.log(req.body.page)
    newsServices
        .newsFeed(req.body.page, req.body.category)
        .then(data => res.json(data))
})

export default router
