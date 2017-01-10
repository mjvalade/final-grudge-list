'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static('public'));
app.locals.grudges = [];

app.get('/api/grudges', (request, response) => {
  response.send({ grudges: app.locals.grudges });
});

app.listen(app.get('port'), () => {
  console.log(`Grudge List is running on ${app.get('port')}.`);
});

app.post('/api/post', (request, response) => {
  let { grudge } = request.body;
  if (!grudge) {
    return response.status(422).send({
      error: 'No grudge provided'
    });
  }

  let obj = {};
  obj.id = Date.now();
  obj.name = name;
  obj.count = 0;

  app.locals.grudges.push(obj);
  response.status(201).json(obj.id);
});

// for testing to work
// if (!module.parent) {
//   app.listen(app.get('port'), () => {
//     console.log(`listening on ${app.get('port')}`);
//   });
// }
//
// module.exports = app;
