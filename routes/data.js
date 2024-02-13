
const data = [];

module.exports = {
    getData: () => data,
    addMessage: (message) => data.push(message)
};
