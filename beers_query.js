query getBeer($Beer_ID:Int!){
  beer(id:$Beer_ID){
    id,
    name,
    brand,
    price
  }
},
query getBeers($Beer_Name:String!){
  beers(name:$Beer_Name){
    id,name,brand,price
  }
}

Query_Variables
------------------
{"Beer_ID":1,"Beer_Name":"Tecate"}