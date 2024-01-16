const allInstructor = (req, res) => {
  res.send("<h1>All Instructors </h1>");
};

const deleteInstructor = (req, res) => {
  const { id } = req.params;
  if (id == 1) {
    res.send(`<h1>Con not delete instructor by this id ${req.params.id}</h1>`);
  } else {
    res.send(`<h1>instructor deleted </h1>`);
  }
};

export { allInstructor, deleteInstructor };
