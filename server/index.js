import epxress from 'express'
import cors from 'cors'

const app = epxress();
const PORT = process.env.PORT || 8080;


// middleware
app.use(cors());
app.use(epxress.json());


app.listen(PORT, () => {
    console.log("Server running on PORT=" + PORT);
})