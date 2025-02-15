---
sidebar: auto
---
# Custom providers

There are a lot of scenarios when you might want to bind something directly to the IoC container. 
For example, any constant values, configuration objects created based on the current environment,
 external libraries, or pre-calculated values that depends on few other defined providers. 
 
Moreover, you are able to override default implementations, e.g. use different classes or make use of various test doubles (for testing purposes) when needed.

One essential thing that you should always keep in mind is that Ts.ED use @@TokenProvider@@ to identify a depencency. 

Usually, the auto-generated tokens are equal to classes. If you want to create a custom provider, you'd need to choose a token.
Mostly, the custom tokens are represented by either plain strings or symbols. 

Let's go through the available options.

## Use Value

The `useValue` syntax is useful when it comes to either define a constant value, put external library into DI container, 
or replace a real implementation with the mock object.

<<< @/docs/docs/snippets/providers/custom-provider-use-value-declaration.ts

In order to inject custom provider, we use the @@Inject@@ decorator. This decorator takes a single argument - the token.

<<< @/docs/docs/snippets/providers/custom-provider-use-value-usage.ts

## Use Factory

The `useFactory` is a way of creating providers dynamically. 
The actual provider will be equal to a returned value of the factory function. 
The factory function can either depend on several different providers or stay completely independent. 
It means that factory may accept arguments, that DI will resolve and pass during the instantiation process.

<<< @/docs/docs/snippets/providers/custom-provider-use-factory-declaration.ts

In order to inject custom provider, we use the @@Inject@@ decorator. This decorator takes a single argument - the token.

<<< @/docs/docs/snippets/providers/custom-provider-use-value-usage.ts

## Use Async Factory

The `useAsyncFactory` is a way of creating asynchronous providers dynamically. 
The actual provider will be equal to a returned value of the factory function. 
The factory function can either depend on several different providers or stay completely independent. 
It means that factory may accept arguments, that DI will resolve and pass during the instantiation process.

<<< @/docs/docs/snippets/providers/custom-provider-use-async-factory-declaration.ts

In order to inject custom provider, we use the @@Inject@@ decorator. This decorator takes a single argument - the token.

<<< @/docs/docs/snippets/providers/custom-provider-use-value-usage.ts

::: warning
Async factory will always considered as `SINGLETON`. Is not possible to use other scope like `REQUEST` and `INSTANCE` because asynchronous providers are resolved on server loading. 
:::

###  Built-in factory

Some factories are built-in Ts.ED. These factories are :

- @@ExpressApplication@@: This is an instance of Express.Application](http://expressjs.com/fr/4x/api.html#app).
- @@HttpServer@@: This is an instance of [Http.Server](https://nodejs.org/dist/latest/docs/api/http.html#http_class_http_server) from `http` module.
- @@HttpsServer@@: This is an instance of [Https.Server](https://nodejs.org/dist/latest/docs/api/https.html#https_class_https_server) from `https` module.


## Use Class

The `useClass` syntax is similar to register provider via decorator. But it allows you using different class per chosen factors.
For example you can change class depending on the environment profile `production` or `development`.

<<< @/docs/docs/snippets/providers/custom-provider-use-class-declaration.ts

::: tip
registerProvider can use for to add a provider or override an existing provider (like @@OverrideProvider@@ decorator).
:::

In this case, even if any class depends on ConfigService, Ts.ED will inject an instance of the provided class (`ConfigService` or `DevConfigService`) instead.

<<< @/docs/docs/snippets/providers/custom-provider-use-class-usage.ts

