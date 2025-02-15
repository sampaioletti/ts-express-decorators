---
sidebar: auto
meta:
 - name: description
   content: Session configuration 
 - name: keywords
   content: ts.ed express typescript auth node.js javascript decorators
---
# Session & cookies

Ts.ED provide two decorators to get @@Session@@ and @@Cookies@@ values in your controller.

## Installation

Before using the Session and Cookies, we need to install the a module like [express-session](https://www.npmjs.com/package/express-session) but 
you can use another module which follow the same convention. 

```bash
npm install --save express-session
```

::: warn
The default server-side session storage, MemoryStore, is purposely not designed for a production environment. It will leak memory under most conditions, does not scale past a single process, and is meant for debugging and developing.

For a list of stores, see [compatible session stores](https://www.npmjs.com/package/express-session#compatible-session-stores).
:::

## Configuration

Edit your Server and add these lines:

<<< @/docs/tutorials/snippets/session/configuration.ts


## Usage
### Session

<<< @/docs/tutorials/snippets/session/example-session.ts

### Cookies 

<<< @/docs/tutorials/snippets/session/example-cookies.ts

## Initialize session

Sometime we want to be sure that the session is correctly initialized with the right values.

Let's start, by creating a middleware CreateRequestSessionMiddleware in `middlewares` directory:

<<< @/docs/tutorials/snippets/session/example-create-session.ts

Then, add this middleware on the server:

<<< @/docs/tutorials/snippets/session/configuration-middleware.ts

Finally, you can read and write values in your controller:

<<< @/docs/tutorials/snippets/session/example-session.ts

In addiction, you can add integration test with SuperTest and `@tsed/testing` package.
Here an example of Rest API test:

<<< @/docs/tutorials/snippets/session/example-test.ts

::: tip
You can find a working example on [Express Session here](https://github.com/TypedProject/tsed-example-session).
:::

