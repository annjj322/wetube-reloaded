export const trending = (req, res) => res.render("home", {pageTitle: "Home"});
// express -> view directory -> pug file 따로 import 해주지않아도 됨.

export const see = (req, res) => {
  console.log(req.params);
  return res.render("watch");
};

export const edit = (req, res) => {
  return res.render("edit");
};

export const search = (req, res) => res.sent("Search");

export const upload = (req, res) => res.send("Upload");

export const deleteVideo = (req, res) => {
  return res.send("Delete");
};

console.log(process.cwd());
