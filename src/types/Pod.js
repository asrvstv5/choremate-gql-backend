
const { gql } = require('apollo-server');

module.exports = gql`

    input CreatePodInput {
        name: String!
        users: [String!]
    }

    input UpdatePodInput {
        name: String
        users: [String]
        messages: PodMessagesInput
    }

    input PodMessagesInput {
        receivedUserRequests: [UserRequestInput]
    }

    input UserRequestInput {
        userId: String
        name: String
    }

    type PodMessages {
        receivedUserRequests: [UserRequest]
    }

    type UserRequest {
        userId: String
        name: String
    }

    type Pod {
        id: ID!
        name: String!
        users: [String!]
        messages: PodMessages
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