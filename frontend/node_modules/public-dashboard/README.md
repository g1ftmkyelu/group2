# Public Dashboard

Hi, wellcome to Public Dashboard Package, a simple configurable dashboard

## How to use the package?

Install the package:

```bash
npm install public-dashboard
```

Import and enjoy:

```js
import { HelloWorld } from public-dashboard;

const App = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
};
```

[Example demo app](https://github.com/NestorNahuel/public-dashboard/blob/master/example/index.tsx)

## Dev Workflow

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the demo app in another terminal:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```
