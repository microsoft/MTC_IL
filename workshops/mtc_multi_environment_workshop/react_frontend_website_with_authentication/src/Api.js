import axios from 'axios';

/**
 * URLs and other api constants
 */
const constants = {
    api: {
        baseURL: '<apiBaseUrl>',
    },
};

/**
 * Create an Axios Client with defaults
 */
export default axios.create({
    baseURL: constants.api.baseURL,
    headers: {'Ocp-Apim-Subscription-Key': '<Ocp-Apim-Subscription-Key>' }
});