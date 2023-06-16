import express from "express";
import { engine as handlebarsEngine } from "express-handlebars";

const app = express();
const port = 3000;

app.engine('handlebars', handlebarsEngine({ defaultLayout: 'main' }));
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const student = {
        name: 'luchito',
        lastname: 'de la rubia'
    };
    res.render('home', student);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});