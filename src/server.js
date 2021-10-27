import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  console.log("I will respond.");
  return res.send("Hello");
};

const routerLogger = (req, res, next) => {
  console.log("PATH", req.path);
  next();
};

const middleWareLogger = (req, res, next) => {
  console.log("METHOD", req.method);
  next();
};

const handleLogin = (req, res) => {
  return res.send("Here Is A Login Page!");
};

app.use(middleWareLogger, routerLogger);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✔ Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);
