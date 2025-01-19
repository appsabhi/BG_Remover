const Bg_controller = require("../controller/Bg_controller")
const express = require("express")
const Route = express.Router()
const upload = require("../util/multer");



Route.get("/",Bg_controller.get_home)
Route.post(
    "/remove_bg",
    upload.single("image"),
    Bg_controller.remove_bg
  );

module.exports=Route