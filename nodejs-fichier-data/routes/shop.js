import express from "express";
import {livres} from '../data/data.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('shop', { livres: livres }); 
});


export default router;
