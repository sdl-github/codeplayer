import { MapFile } from '@/constant';

const indexHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CodePlayer</title>
  </head>
  <body>
    <div id="app">JavaScript Template</div>
  </body>
  <script type="module">
    import './index.js';
    import './index.css';
  </script>
</html>
`.trim();

const indexJs = `
const app = document.getElementById('app');
app.innerText = 'Hello JavaScript Template';
`.trim();


const indexCss = `
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 200px;
}
`.trim();
const importMap = `
{
  "imports": {

  }
}
`.trim();

export const JsTemplate = {
  'index.html': indexHtml,
  'index.js': indexJs,
  'index.css': indexCss,
  [MapFile]: importMap,
};
