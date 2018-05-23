const express = require("express");
const router = express.Router();
const axios = require("axios");
const CircularJSON = require("circular-json");

router.get("/photos/:id", (req, res) => {
  let id = req.params.id;
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=AIzaSyCpjEQdeHuCap_GWiHfez5v_rsXDQ-977w`
    )
    .then(data => {
      let nonData = CircularJSON.stringify(data);
      let dados = JSON.parse(nonData);
      res.send(dados.data.result.photos);
    })
    .catch(err => console.error(err));
});

module.exports = router;
