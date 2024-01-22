import path from "path";

const aboutcontroller = (req, res) => {
  res.sendFile(path.join(process.cwd(), "views", "about.html"));
};

export { aboutcontroller };
