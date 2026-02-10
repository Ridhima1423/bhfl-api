const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const EMAIL = "ridhima1424.be23@chitkarauniversity.edu.in";

app.get("/", (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: EMAIL
  });
});

app.post("/bfhl", (req, res) => {
  try {
    const body = req.body;
    const keys = Object.keys(body);

    if (keys.length !== 1 || keys[0] !== "fibonacci") {
      return res.status(400).json({
        is_success: false
      });
    }

    const n = body.fibonacci;

    if (typeof n !== "number" || n <= 0) {
      return res.status(400).json({
        is_success: false
      });
    }

    let result = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
      result.push(a);
      [a, b] = [b, a + b];
    }

    res.status(200).json({
      is_success: true,
      official_email: EMAIL,
      data: result
    });

  } catch {
    res.status(500).json({
      is_success: false
    });
  }
});

module.exports = app;