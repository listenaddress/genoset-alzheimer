var gql = require('gql');

module.exports = gql.and([
  gql.has('rs1049296', 'T'),
  gql.has('rs1800562', 'A'),
  gql.not(
    gql.and([
      gql.only('rs1049296', 'T'),
      gql.only('rs1800562', 'A')
    ])
  ),
  gql.exact('rs439358', 'CT'),
  gql.only('rs7412', 'C')
]);