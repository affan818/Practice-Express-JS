import path from "path";

const contactcontroller = (req, res) => {
  res.sendFile(path.join(process.cwd(), "views", "contact.html"));
};

export { contactcontroller };
