import db from "../utils/database.js";

class Livre {
    constructor(id, title, author, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
    }

    save() {
        return db.execute('INSERT INTO livres (Title, Autor, Price) VALUES (?, ?, ?)', [this.title, this.author, this.price]);
    }

    update() {
        return db.execute('UPDATE livres SET Title = ?, Autor = ?, Price = ? WHERE Id = ?', [this.title, this.author, this.price, this.id]);
    }

    static fetch(livreId) {
        return db.execute('SELECT * FROM livres WHERE Id = ?', [livreId]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM livres');
    }

    static delete(livreId) {
        return db.execute('DELETE FROM livres WHERE Id = ?', [livreId]);
    }
}

export default Livre;
