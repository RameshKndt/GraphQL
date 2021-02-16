var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var beersData = require('./beers');
console.log(beersData); 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
	type Query {
		beer(id: Int!): Beer
		beers(name: String): [Beer]
	},
	type Beer {
	  id: Int
	  name: String
	  brand: String
	  price: Float
	}
`);

var getBeer = args=> {
	console.log(args);
	return beersData.filter(beer => {
		console.log(beer.id,args.id , beer.id === args.id);
		return beer.id === args.id;
		})[0];
	};
 var getBeers = args => beersData.filter(beer=>beer.name == args.name);
 
 
// The root provides a resolver function for each API endpoint
var root = {
beer:getBeer,
beers:getBeers
};
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');