---
title: "Adding Environment Variables to Your Webpack Project"
pubDate: "Mar 28, 2024"
description: "It's actually very straightforward"
heroImage: "/blog-images/tech/2024/environment.jpg"
category: "How-to"
tags: ["how-to", "webpack", "webdev"]
draft: false
---
Adding environment variables to your Webpack project is simple and easy. All you need to do is add `dotenv-webpack` into the dev dependencies in your `package.json`

```bash
pnpm i -D dotenv-webpack
```

Then in the `webpack.config.js`, add this to the plugins:

```js
{
 plugins: [
   new Dotenv({
  path: `./.env.${process.env.NODE_ENV}`,
   }),
 ],
};
```

With this setup, it will be easiest to set the `NODE_ENV` as part of your `scripts` in your `package.json`

```json
{
 "scripts": {
  "dev": "NODE_ENV=local ...",
  "build": "NODE_ENV=release ...",
  // ...
 },
 // ...
}
```

Then you can create files based on the path provided `./.env.local` and `./.env.release` (you'll need to match yours up with whatever path and file name you specify in Webpack). Then the .env files are formatted the same as you would in any other project:

```.env
KEY=VALUE
```

Then in javascript all you need to access the value is to look at the `process.env` object like this:

```js
const value = process.env.KEY;
```
