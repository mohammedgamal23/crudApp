var express = require("express");
var router = express.Router();
var User = require("../db/user.model");


router.get("/users", async (req, res) => {
  w = await User.find({});
  res.send(w);
});

router.post("/users", async (req, res) => {
  const { name, email, title, phone } = req.body;
  const m = new User();
  m.name = name;
  m.email = email;
  m.title = title;
  m.phone = phone;
  q = await m.save();
  res.send(q);
});

router.put("/users/:id", function (req, res) {
  const promise = User.findByIdAndUpdate(req.params.id, req.body);
  promise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/users/:id", function (req, res) {
    const promise = User.findByIdAndDelete(req.params.id);
    promise
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
});


router.delete("/users", function(req, res){
  const promise = User.deleteMany({});
    promise
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
})

module.exports = router;
