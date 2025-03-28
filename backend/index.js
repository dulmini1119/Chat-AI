import express from "express";

const port = process.env.PORT || 3000;
const app = express();

app.get("/api/upload",(req,res) => {
    res.send("It Works");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})