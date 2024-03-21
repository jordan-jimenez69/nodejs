import Express from "express";
import shopRouter from "./routes/shop.js";
import authRouter from "./routes/auth.js";
import buyRouter from "./routes/buy.js";
import adminRouter from "./routes/admin.js";
import connect from "./utils/database.js";


const app = Express();

app.use(Express.static("public"));

app.set("view engine", "ejs");

app.set("views", "views");

app.use("/", (req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.render("home", {});
});

app.use("/shop", shopRouter);
app.use("/auth", authRouter);
app.use("/buy", buyRouter);
app.use("/admin", adminRouter);

app.listen(3000, () => {
  connect()
});
