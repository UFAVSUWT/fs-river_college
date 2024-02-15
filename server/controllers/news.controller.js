const uuid = require("uuid");
const path = require("path");
const { News } = require("../models/models");
const ApiError = require("../error/apiError");
var fs = require("fs");
const { error } = require("console");
class NewsController {
  async create(req, res, next) {
    try {
      const { title, text, author, card, main, date, page } = req.body;
      let fileName;
      if (req.files && req.files.image) {
        const { image } = req.files;
        fileName = uuid.v4() + ".jpg";
        image.mv(path.resolve(__dirname, "..", "static", fileName));
      } else {
        fileName = null;
      }
      const news = await News.create({
        title,
        text,
        author,
        card,
        main,
        date,
        page,
        image: fileName,
      });
      return res.json(news);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const news = await News.findAll();
    return res.json(news);
  }
  async getOne(req, res) {
    const { id } = req.params;

    try {
      if (typeof Number(id) == "number") {
        const oneNews = await News.findOne({ where: { id } });
        return res.json(oneNews);
      } else {
        throw new Error("id не найден");
      }
    } catch (e) {
      console.log(e);
    }
  }
  async editNews(req, res) {
    try {
      console.log(req);
      const { id } = req.params;
      const { title, text, author, card, main, date, page } = req.body;
      let fileName;
      if (req.files && req.files.image) {
        const { image } = req.files;
        fileName = uuid.v4() + ".jpg";
        image.mv(path.resolve(__dirname, "..", "static", fileName));
      } else {
        fileName = null;
      }
      const news = await News.findOne({ where: { id } });
      news.set({
        title,
        text,
        author,
        card,
        main,
        date,
        page,
        image: fileName,
      });
      await news.save();
      return res.json(news);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async deliteNews(req, res, next) {
    try {
      const { id } = req.params;
      const news = await News.findOne({ where: { id } });
      const image = news.dataValues.image;
      await News.destroy({ where: { id } });
      /*  if (news.dataValues.image) {
        fs.unlinkSync("static/" + image); //Как работает ?!!!
      } */
      return res.json("Новость удалена");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}
module.exports = new NewsController();
