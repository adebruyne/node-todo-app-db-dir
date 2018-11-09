function page(content) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
  />
  <link rel="stylesheet" href="/stylesheets/index.css" />
    <title>Document</title>
</head>
<body>
    ${content}
</body>
</html>
    `;
}

module.exports = page;
