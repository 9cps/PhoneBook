const express = require('express');
const cors = require('cors');
const db = require('./models');
const app = express(); 

app.use(express.json());
app.use(cors());

// Call routers
const postRouter = require('./routes/MyFriends');
app.use("/Friends", postRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("APP RUN ON PORT 3001");
    });
});
