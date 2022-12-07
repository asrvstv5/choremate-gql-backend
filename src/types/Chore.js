const { gql } = require('apollo-server');

module.exports = gql`

    type Chore {
        id: ID!
        name: String!
		choreType: String!
		cp: Int!
		userId: String
		done: Boolean!
        day: Int
        podId: String!
    }

    input CreateChoreInput {
        name: String!
		choreType: String!
		cp: Int!
		userId: String
		done: Boolean!
        day: Int
        podId: String!
    }

    input UpdateChoreInput {
        name: String
		choreType: String
		cp: Int
		userId: String
		done: Boolean
        day: Int
        podId: String
    }

    type DeletePayload{
        id: ID!
    }

    type Query {
        chore(id: String!): Chore
        podChores(podId: String!): [Chore]
        userChores: [Chore]
    }
    
    type Mutation {
        createChore(input: CreateChoreInput!): Chore!
        updateChore(id: ID!, input: UpdateChoreInput!): Chore!
        deleteChore(id: ID!): DeletePayload!
    }
`;