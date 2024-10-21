const express = require('express');
const app = express();
const notFound = require("./middleware/not-found.js");
const errorHandleMiddleware = require('./middleware/error-handler.js');
const advice = require = require('./routes/advice.js');
require('dotenv').config();


//Middleware
app.use(express.json());



//Routes
app.use('/api/v1/getadvices', advice)
app.use(errorHandleMiddleware);
app.use(notFound);



// Port Listening to.
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`)
});