// buat UpTime xixixix, di UpTimeRobot.com
import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("AI-Haikaru is awake and listening!");
});

app.get("/status", (req, res) => {
    res.json({
        status: "running",
        bot: "AI-Haikaru",
        service: "Uptime Keeper"
    });
});

export default app;