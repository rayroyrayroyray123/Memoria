var express = require("express");
var router = express.Router();

const { Post } = require("../Model/Post.js");
const { Counter } = require("../Model/Counter.js");
const multer = require("multer");

router.post("/submit", (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.postNum = counter.postNum;
      temp.userId = req.body.userId;
      const CommunityPost = new Post(temp);
      CommunityPost.save().then(() => {
        Counter.updateOne(
          {
            name: "counter",
          },
          {
            $inc: { postNum: 1 },
          }
        ).then(() => {
          res.status(200).json({ success: true });
        });
      });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/list", (req, res) => {
  Post.find({ userId: req.body.userId })
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

// router.post("/listone", (req, res) => {
//   Post.find({ userId: req.body.userId })
//     .exec()
//     .then((doc) => {
//       res.status(200).json({
//         success: true,
//         postList: doc,
//       });
//     })
//     .catch((err) => {
//       res.status(400).json({ success: false });
//     });
// });

router.post("/detail", (req, res) => {
  Post.findOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, post: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/edit", (req, res) => {
  let temp = {
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    audio: req.body.audio,
    lat: req.body.lat,
    long: req.body.long,
    timestamp: req.body.timestamp,
  };
  Post.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp })
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/delete", (req, res) => {
  Post.deleteOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

//Set multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "image/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");

router.post("/image/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ success: false });
    } else {
      res.status(200).json({ success: true, filePath: res.req.file.path });
    }
  });
});

router.post("/audio/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ success: false });
    } else {
      res.status(200).json({ success: true, filePath: res.req.file.path });
    }
  });
});

router.post("/geo/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ success: false });
    } else {
      var fs = require("fs");
      fs.readFile(res.req.file.path, function (err, data) {
        if (err) throw err;
        var array = data.toString().split("\n");
        const lat = parseFloat(array[0]);
        const long = parseFloat(array[1]);
        const time = String(array[2]);
        res.status(200).json({
          success: true,
          filePath: res.req.file.path,
          longitude: long,
          latitude: lat,
          timestamp: time,
        });
      });
    }
  });
});

module.exports = router;
