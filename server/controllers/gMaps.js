

module.exports = {

  search: (req, res)=> {
    console.log("hit search in controllers", req.body);
    const yelp = require('yelp-fusion');
    const clientId = '7HIF6_eXSIjo2_WLCNSETw';
    const clientSecret = 'JG6H6jSWYJHqcCwKCAACps8QF3xn0Dq8NwnCBSgYyAWsPMEXMd4pDZQzixlHWKZF';

    const searchRequest = {
      term:req.body.category,
      location: req.body.location,
      price: 1,
      limit: 20,
    };

    yelp.accessToken(clientId, clientSecret)
    .then(response => {
      const client = yelp.client(response.jsonBody.access_token);

      client.search(searchRequest)
      .then(response => {

        // const firstResult = response.jsonBody.businesses[0];
        // const prettyJson = JSON.stringify(firstResult, null, 4);
        // console.log(prettyJson);
        res.json(response);
      });
    }).catch(e => {
      console.log(e);
    });
  }

}
