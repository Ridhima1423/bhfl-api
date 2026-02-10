const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const EMAIL = "ridhima1424.be23@chitkarauniversity.edu.in";

app.get("/health", (req, res) =>{
  res.status(200).json({
    is_success: true,
    official_email: EMAIL
  });
});

app.post("/bfhl", (req, res) =>{
  try {
    const input = req.body;
    const keys = Object.keys(input);

    if(keys.length !== 1 || keys[0] !== "fibonacci"){
      return res.status(400).json({
        is_success: false,
        error: "Invalid request"
      });
    }

    const n = input.fibonacci;

    if(typeof n !== "number" || n <= 0){
      return res.status(400).json({

        is_success: false,
        error: "Invalid input value"
      });
    }

    let result = [];
         let first = 0;
    let second =  1;

    for (let i = 0; i < n; i++){
      result.push(first);
      let next = first + second;

      first = second;
      second = next;
    }

    res.status(200).json({
      is_success: true,
      official_email: EMAIL,
      data: result
    });

  } 
  catch{
    res.status(500).json({
      is_success: false,
      error: "Something went wrong"
    });
  }
});

const PORT =  5000;
app.listen(PORT,() =>{
  console.log(`Server running on port ${PORT}`);
});