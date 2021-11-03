export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
// express -> view directory -> pug file 따로 import 해주지않아도 됨.

export const see = (req, res) => {
  console.log(req.params);
  return res.render("watch", { pageTitle: "Watch" });
};

export const edit = (req, res) => {
  return res.render("edit", { pageTitle: "Edit" });
};

export const search = (req, res) => res.sent("Search");

export const upload = (req, res) => res.render("upload");

export const deleteVideo = (req, res) => {
  return res.send("Delete");
};

console.log(process.cwd());
