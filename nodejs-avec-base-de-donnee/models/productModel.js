import db from "../utils/database.js";

class Livre {
    constructor(id, title, author, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM livres');
    }

    save() {
        return db.execute('INSERT INTO livres (title, author, price) VALUES (?, ?, ?)', [this.title, this.author, this.price]);
    }

}


export default Livre;
