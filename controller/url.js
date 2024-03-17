

const URL = require('../models/url')

const { nanoid} = require('nanoid')


async function handleGenerateShortenedUrl(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({
        error:'url is required'
    })
    const shortId = nanoid(8);
    await URL.create({
        shordId:shortId,
        redirectURL:body.url,
        visitedHistory:[],
    });

    return res.json({id:shortId});  
}

module.exports = {
    handleGenerateShortenedUrl
}