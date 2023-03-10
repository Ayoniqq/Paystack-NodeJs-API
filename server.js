const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8080;
const path = require("path");

app.get("/paystack", (req, res) => {
  //PAYSTACK CODE
  const https = require("https");

  const params = JSON.stringify({
    email: "ayuspee@email.com",
    amount: "128000000",
  });

  const options = {
    hostname: "api.paystack.co",
    port: 443,
    path: "/transaction/initialize",
    method: "POST",
    headers: {
      Authorization: "Bearer sk_test_01e1955f5e1713cba43d95851dde3987ae366fc5",
      "Content-Type": "application/json",
    },
  };

  const req = https
    .request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        console.log(JSON.parse(data));
        //res.send(data);
      });
    })
    .on("error", (error) => {
      console.error(error);
    });

  req.write(params);
  req.end();
  //PAYSTACK CODE END
});

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT:${PORT}`); //LISTEN
});
