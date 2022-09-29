
import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";

let TYPESENSE_SERVER_CONFIG = {
    apiKey: 'xyz', // Be sure to use an API key that only allows searches, in production
    nodes: [
        {
            host: 'localhost',
            port: '8000',
            protocol: 'http',
        },
    ],
    connectionTimeoutSeconds: 1,
    numRetries: 8,
};

export const typesenseAdapter = new TypesenseInstantsearchAdapter({
    server: TYPESENSE_SERVER_CONFIG,
    additionalSearchParameters: {
        queryBy: "title,overview,genres",
        queryByWeights: "4,2,1",
        numTypos: 3,
        typoTokensThreshold: 1,
    },
});

export const searchClient = typesenseAdapter.searchClient;