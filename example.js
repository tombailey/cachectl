const cachectl = require('cachectl');

console.log(cachectl.public().maxAge(60 * 60));
// { "Cache-Control": "public, max-age=360" }

console.log(cachectl.private().maxAge(60));
// { "Cache-Control": "public, max-age=360" }

console.log(cachectl.noCache());
// { "Cache-Control": "no-cache" }

console.log(cachectl.noStore().maxAge(0));
// { "Cache-Control": "no-store, max-age=0" }

/*
    const cachectl = require('cachectl');
    const express = require('express');
    const app = express();
    app.get('/data', (req, res) => {
        res.header(cachectl.public().maxAge(60 * 60)).json({ data: 'cached for 1 hour' })
    });
    app.listen(8080);
 */
