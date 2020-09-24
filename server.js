const expess = require('express');

const app = expess();


app.get("/",(res,req) => res.send('API Running'));

const PORT = process.env.PORT || 6000 ;



app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
