const databaseFunction = () => {
    const config = {};
    const data = [{
        title: 'New',
        content: 'Content what you wanna'
    }];

    if (config.hasData) {
        return data;
    } else {
        process.exit(1);
    }
}

module.exports = {
    databaseFunction
}