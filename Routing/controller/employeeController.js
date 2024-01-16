const allEmployee = (req, res) => {
  res.send("<h1>All Employee</h1>");
};

const deleteEmployee = (req, res) => {
  const { id } = req.params;
  if (id == 50) {
    res.send(`<h1>Connot Delete Employee by this id ${req.params.id}</h1>`);
  } else {
    res.send(`<h1>Deleted Employee by id :${req.params.id}</h1>`);
  }
};

export { allEmployee, deleteEmployee };
