import Express from "express";
import shopRouter from "./routes/shop.js";
import authRouter from "./routes/auth.js";
import buyRouter from "./routes/buy.js";
import adminRouter from "./routes/admin.js";
import pool from "./utils/database.js"; 

const app = Express();

app.use(Express.static("public"));

app.set("view engine", "ejs");

app.set("views", "views");

app.get("/", (req, res) => {
  res.render("home", {});
});

app.use("/shop", shopRouter);
app.use("/auth", authRouter);
app.use("/buy", buyRouter);
app.use("/admin", adminRouter);

app.listen(3000, async () => { 
  try {
    const connection = await pool.getConnection();
    console.log("Connecté à la base de données MySQL.");
    
    const [rows, fields] = await connection.execute('SELECT * FROM livres');
    console.log(rows);

    connection.release(); // N'oubliez pas de libérer la connexion une fois que vous avez fini avec elle
  } catch (error) {
    console.error('Erreur lors de la récupération des données de la table livres :', error);
  }
});
