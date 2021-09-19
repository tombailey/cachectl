# cachectl

Create cache control headers for express and elsewhere.

## Installation

```sh
npm install --save cachectl
```

## Usage

```js
const cachectl = require('cachectl');
const express = require('express');
const app = express();
app.get('/data', (req, res) => {
    res.header(cachectl.public().maxAge(60 * 60)).json({ data: 'cached for 1 hour' })
});
app.listen(8080);
```

See [examples](./example.js) for more usage scenarios.

## License

[Apache License Version 2.0](./LICENSE)
