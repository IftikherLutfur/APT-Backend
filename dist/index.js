import express, {} from 'express';
const app = express();
app.get("/", (req, res) => {
    res.send("Hello Typescript + express");
});
app.listen(process.env.PORT, () => { console.log("Server running on port 500"); });
//# sourceMappingURL=index.js.map