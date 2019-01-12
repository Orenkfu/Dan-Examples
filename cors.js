module.exports = (request, response, next) => {
    const randomNum = Math.floor(Math.random() * 5)+ 1;
    if (randomNum > 3)
        return response.send(`You have failed the roulette: number rolled: ${randomNum}`);

        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Headers', ['Content-Type', 'Authorization', 'X-Request-With', 'Accept']);
        res.header('Access-Control-Allow-Methods', "*");
        res.header('Access-Control-Expose-Headers', 'Authorization');
    next();
}