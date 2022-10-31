let videos = [
  {
    title: "sdfsdfsdfsdf",
    id: 1,
  },
  {
    title: "werwerewr",
    id: 2,
  },
  {
    title: "sdfsdfsfdsdf",
    id: 3,
  },
];
export const homeControl = (req, res) => res.render("home", { videos });
