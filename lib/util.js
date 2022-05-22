/**
 * 
 * @param {Object} objData - Data Which needs to serialize 
 * @param {Array} schema - Schema Object
 * @returns {Array}
 */
function serialize(objData, schema) {

    // throw error if obj is empty
    if (!objData) {
        throw new Error('invalid data');
    }

    if (!schema) {
        throw new Error('invalid schema');
    }

    const result = [];

    for (const [schemaKey, schemaOpt] of Object.entries(schema)) {

        let resultObj;

        if (schemaOpt.type === 'array') {

            const arrayObject = [];

            for (let arrObj of objData[schemaKey]) {

                arrayObject.push(serialize(arrObj, schemaOpt.value));

            }

            resultObj = arrayObject;

        } else if (schemaOpt.type === 'object') {

            resultObj = serialize(objData[schemaKey], schemaOpt.value);

        } else {

            resultObj = objData[schemaKey];

        }

        result[schemaOpt.key] = resultObj;
    }
    return result;
}

/**
 * 
 * @param {Array} data - Array Data
 * @param {Object} schema - Schema Object
 * @returns {Object}
 */
function deserialize(data, schema) {

    // throw error if data is empty
    if (!data) {
        throw new Error('invalid data');
    }

    if (!schema) {
        throw new Error('invalid schema');
    }

    const result = {};

    for (let [schemaKey, schemaOpt] of Object.entries(schema)) {

        let resultObj;

        if (schemaOpt.type === 'array') {

            const temp = [];

            for (let arrObj of data[schemaOpt.key]) {

                temp.push(deserialize(arrObj, schemaOpt.value));
            }

            resultObj = temp;

        } else if (schemaOpt.type === 'object') {

            resultObj = deserialize(data[schemaOpt.key], schemaOpt.value);

        } else {
            resultObj = data[schemaOpt.key];
        }

        result[schemaKey] = resultObj;
    }

    return result;
}

module.exports = {
    serialize,
    deserialize
};