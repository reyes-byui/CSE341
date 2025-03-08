const helloRoute = (req, res) => {
    res.send('Hello, World!');
};

const helloRheaRoute = (req, res) => {
    res.send('Hello, I Am Rhea!');
};

const sampleRoute = (req, res) => {
    res.send('Hello, I Am Sample!');
};

module.exports = {
    helloRoute,
    helloRheaRoute,
    sampleRoute
};