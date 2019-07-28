const path = require('path');

const resolve = {
    extensions: ['*', '.js', '.jsx'],
    alias: {
        services: path.resolve(__dirname, '../src/shared/services/'),
        stores: path.resolve(__dirname, '../src/shared/stores/'),
        uikit: path.resolve(__dirname, '../src/shared/uikit/'),
        utilities: path.resolve(__dirname, '../src/shared/utilities/'),
        models: path.resolve(__dirname, '../src/shared/models/'),
        constants: path.resolve(__dirname, '../src/shared/constants/'),
    },
};
export default resolve;
