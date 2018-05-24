const express = require("express");
const router = express.Router();
const axios = require("axios");
const CircularJSON = require("circular-json");
const config = require("../config/serviceAccount.json");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(config)
});
const db = admin.firestore();

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

router.post("/itinerario/update", (req, res) => {
  const ref = db.collection("itinerarios").doc(req.body.id);
  ref
    .set(req.body)
    .then(data => res.status(200).json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

router.post("/itinerario/add", (req, res) => {
  const ref = db.collection("itinerarios");
  ref
    .add(req.body)
    .then(data => res.status(200).json(data.id))
    .catch(err => res.status(404).json({ success: false }));
});

router.get("/itinerario/:id", (req, res) => {
  const ref = db.collection("itinerarios").doc(req.params.id);
  var getDoc = ref
    .get()
    .then(doc => {
      if (!doc.exists) {
        res.status(404).json({ success: false });
      } else {
        res.status(200).send({ id: doc.id, ...doc.data() });
      }
    })
    .catch(err => {
      res.status(404).json({ success: false });
    });
});

router.get("/itinerarios", (req, res) => {
  const ref = db.collection("itinerarios");
  const data = [];
  var allCities = ref
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() });
      });
      res.send(data);
    })
    .catch(err => {
      res.status(404).json({ success: false });
    });
});

module.exports = router;
