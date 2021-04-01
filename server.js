const app = require('./src/api/app');
require('./src/domain/connection');
require('./src/domain/models');

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})

