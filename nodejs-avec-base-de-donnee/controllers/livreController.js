import Livre from "../models/productModel.js";


export const getAllLivres = async (req, res) => {
    try {
        const [livres] = await Livre.fetchAll();
        res.render("shop", { livres });
    } catch (error) {
        console.error("Erreur lors de la récupération de tous les livres :", error);
        res.status(500).send("Une erreur est survenue");
    }
};

export const addLivre = async (req, res) => {
    const { title, author, price } = req.body;
    const livre = new Livre(null, title, author, price);
    try {
        await livre.save();
        res.status(201).send("Livre ajouté avec succès !");
    } catch (error) {
        console.error("Erreur lors de l'ajout du livre :", error);
        res.status(500).send("Une erreur est survenue lors de l'ajout du livre.");
    }
};

