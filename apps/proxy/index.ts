import express from "express";
import cors from "cors";
import axios from "axios";
const app = express();
const PORT = 5000;

app.use(cors({
  origin: '*'
}));
app.use(express.json());

app.get("/klines", async (req, res) => {
  try {
    const { symbol, interval, startTime } = req.query;
    console.log(symbol, interval, startTime)

    const response = await axios.get(`https://api.backpack.exchange/api/v1/klines?symbol=${symbol}&interval=${interval}&startTime=${startTime}`);

    return res.status(200).json(response.data)
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});

