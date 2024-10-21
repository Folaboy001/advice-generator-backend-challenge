const axios = require('axios');
const asyncWrapper = require('../middleware/async.js');


const getAdvices = asyncWrapper(async (req, res) => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const data = await response.data.slip
    const {id,advice} = data

    return res.status(200).json({advice : advice})

});


module.exports = { getAdvices }