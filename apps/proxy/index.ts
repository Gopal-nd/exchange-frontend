import express from "express";
import cors from "cors";
import axios from "axios";
const app = express();
const PORT = 5000;

app.use(cors({
  origin: '*'
}));
app.use(express.json());
const BACKPACK_BASE_URL = "https://api.backpack.exchange";

app.get("/klines", async (req, res) => {
  try {
    const { symbol, interval, startTime } = req.query;
    console.log(symbol, interval, startTime)

    const response = await axios.get(`${BACKPACK_BASE_URL}/api/v1/klines?symbol=${symbol}&interval=${interval}&startTime=${startTime}`);

    return res.status(200).json(response.data)
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});




app.get("/depth", async (req, res) => {
  try {
    const { symbol } = req.query;

    if (!symbol) {
      return res.status(400).json({ error: "symbol is required" });
    }

    const response = await axios.get(
      `${BACKPACK_BASE_URL}/api/v1/depth?symbol=${symbol}`);

    res.json(response.data);
  } catch (error: any) {
    console.error("Backpack proxy error:", error);
    res.status(500).json({
      error: "Failed to fetch depth data",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});

