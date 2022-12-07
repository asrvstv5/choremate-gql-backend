
const { gql } = require('apollo-server');

module.exports = gql`

    input CreatePodInput {
        name: String!
        users: [String!]
    }

    input UpdatePodInput {
        name: String
        users: [String]
    }

    type Pod {
        id: ID!
        name: String!
        users: [String!]
    }

    type DeletePayload{
        id: ID!
    }

    type Query {
        pod(id: String!): Pod
        pods: [Pod]
    }
    
    type Mutation {
        createPod(input: CreatePodInput!): Pod!
        updatePod(id: ID!, input: UpdatePodInput!): Pod!
        deletePod(id: ID!): DeletePayload!
    }
`;