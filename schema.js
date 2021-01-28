import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

import axios from "axios";

// Launch Type

const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
    links:{ type: IconType }
  }),
});

// Rocket Type

const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
  }),
});


// Icon Type

const IconType = new GraphQLObjectType({
  name: "Icon",
  fields: () => ({
    mission_patch_small: { type: GraphQLString }
  }),
});

// Root Query

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      async resolve(parent, args) {
        const res = await axios.get(`https://api.spacexdata.com/v3/launches`);
        return res.data;
      },
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type:GraphQLInt }
      },
      async resolve(parent, args) {
        const res = await axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`);
        return res.data;
      }
    }
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
