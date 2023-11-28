
const createDisplayQuery = (query, values) => {
    let index = 0;
    return query.replace(/\$\d+/g, () => {
        const value = values[index];
        index++;
        return typeof value === 'string' ? `'${value}'` : value;
    }).replace('/\t+/g', '');
}

module.exports = {
	createDisplayQuery,
}
