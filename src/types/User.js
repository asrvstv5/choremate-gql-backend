
const { gql } = require('apollo-server');

module.exports = gql`
  type Schedule {
    avail: Boolean!
    hrs: Int!
  }

  input ScheduleInput {
    avail: Boolean!
    hrs: Int!
  }

  input WeeklyScheduleInput {
    schedule: [ScheduleInput]
  }

  type PodInfo {
    name: String!
    pts: Int!
  }

  input PodInfoInput {
    name: String!
    pts: Int!
  }

  input PodInfoInputList {
    podInfoList: [PodInfoInput]
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    pod: ID
    week1: [Schedule]
    week2: [Schedule]
    podPts: Int
    weekPts: Int
    prevPods: [PodInfo]
  }

  input UpdateUserInput {
    name: String
    email: String
    pod: ID
    week1: WeeklyScheduleInput
    week2: WeeklyScheduleInput
    podPts: Int
    weekPts: Int
    prevPods: PodInfoInputList
  }

  type Query {
    loggedInUser: User
    userFromId(id: String!): User
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): String!
    updateUser(input: UpdateUserInput!): User!
  }
`;