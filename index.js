const express = require('express')
const app = express();

let PORT = 2000
app.use('/docs', express.static(`${process.cwd()}/docs`));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('\x1b[33m%s\x1b[0m',`Server is running on PORT ${PORT}`);
});

app.get("/docs", (req, res) => {
  res.sendFile(`${process.cwd()}/docs/redoc.html`);
});