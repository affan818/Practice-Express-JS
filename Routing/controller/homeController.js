import path from "path";

const homeController = (req, res) => {
  res.sendFile(path.join(process.cwd(), "views", "home.html"));
};
export { homeController };
