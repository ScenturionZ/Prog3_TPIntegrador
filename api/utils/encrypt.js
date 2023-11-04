const bcrypt = require("bcrypt")

async function hashPass(pass) {
    const hash = await bcrypt.hash(pass, 10);
    return hash;
}

async function comparePass(pass, hash) {
    const result = await bcrypt.compare(pass, hash);
    return result;
}

module.exports = {
    hashPass,
    comparePass
};