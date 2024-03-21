import Livre from "../models/productModel.js";

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

export const getLivreById = async (req, res) => {
    const livreId = req.params.id;
    try {
        const [livre] = await Livre.fetch(livreId);
        if (!livre) {
            res.status(404).send("Livre non trouvé.");
        } else {
            res.json(livre);
        }
    } catch (error) {
        console.error("Erreur lors de la récupération du livre :", error);
        res.status(500).send("Une erreur est survenue lors de la récupération du livre.");
    }
};

export const getAllLivres = async (req, res) => {
    try {
        const [livres] = await Livre.fetchAll();
        res.json(livres);
    } catch (error) {
        console.error("Erreur lors de la récupération de tous les livres :", error);
        res.status(500).send("Une erreur est survenue lors de la récupération de tous les livres.");
    }
};

export const updateLivre = async (req, res) => {
    const livreId = req.params.id;
    const { title, author, price } = req.body;
    const livre = new Livre(livreId, title, author, price);
    try {
        await livre.update();
        res.status(200).send("Livre mis à jour avec succès !");
    } catch (error) {
        console.error("Erreur lors de la mise à jour du livre :", error);
        res.status(500).send("Une erreur est survenue lors de la mise à jour du livre.");
    }
};

export const deleteLivre = async (req, res) => {
    const livreId = req.params.id;
    try {
        await Livre.delete(livreId);
        res.status(200).send("Livre supprimé avec succès !");
    } catch (error) {
        console.error("Erreur lors de la suppression du livre :", error);
        res.status(500).send("Une erreur est survenue lors de la suppression du livre.");
    }
};