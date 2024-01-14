import express from "express";
const app = express();
const port = 8080;
import employee from "./routes/employee.js";
import instructor from "./routes/instructor.js";

app.get("/", function (req, res) {
  res.send("<h1>wellcome to routng</h1>");
});
// app.get(/about/, function (req, res) {
//   res.send("<h1>About Page</h1>");
// });
// // app.get(/contact/, function (req, res) {
// //   res.send("<h1>Contact Page</h1>");
// // });
// app.get("/students?contact", function (req, res) {
//   res.send("<h1>Contact Page</h1>");
// }); //if you dont type 's' of students then it will be run as same

///ROUTES AND NEXT PARAMETERS

// app.get(
//   /task/,
//   (req, res, next) => {
//     console.log("Task 1 is Completed");
//     next();
//   }, // Call 'next()' to proceed to the next middleware in the chain
//   (req, res, next) => {
//     console.log("task 2 is completed");
//     next();
//   },
//   (req, res) => {
//     res.send("<h1>Task 3 is pandding</h1>");
//   }
// );

app.use("/company", employee);
app.use("/company", instructor);

//routes parameter

app.get("/employee/delete/:id", (req, res) => {
  res.send(`the employee by id : ${req.params.id} is deleted`);
});
app.get("/employee/:job/:id", (req, res) => {
  console.log(
    `the employee role ${req.params.job} and his id is ${req.params.id}`
  );
  res.send(
    `the employee role ${req.params.job} and his id is ${req.params.id}`
  );
});

app.get("*", function (req, res) {
  res.send("<h1>Error....</h1>");
});
app.listen(port, function () {
  console.log(`server is running on http://localhost:${port}`);
});
