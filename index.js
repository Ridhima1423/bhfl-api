const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const EMAIL = "ridhima1424.be23@chitkarauniversity.edu.in";

/* HEALTH API */
app.get("/health", (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: EMAIL
  });
});

/* BFHL – FIBONACCI ONLY */
app.post("/bfhl", (req, res) => {
  const { fibonacci } = req.body;

  if (typeof fibonacci !== "number" || fibonacci <= 0) {
    return res.status(400).json({
      is_success: false
    });
  }

  let result = [];
  let a = 0, b = 1;

  for (let i = 0; i < fibonacci; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }

  res.status(200).json({
    is_success: true,
    official_email: EMAIL,
    data: result
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});