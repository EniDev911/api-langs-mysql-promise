import app from "./app";

const main = () => {
    app.set('port', process.env.PORT || 3000)
    app.listen(app.get('port'), console.log("On http://localhost:"+app.get('port')))
}

main();