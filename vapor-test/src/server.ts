import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

/**
 * Create our client bundle - you could split this out into
 * a preprocessing step.
 */
const [diagnostics, js] = await Deno.bundle("./src/client.ts", undefined, {
  lib: ["dom", "dom.iterable", "es2018"],
}); // more lib options: https://www.typescriptlang.org/docs/handbook/compiler-options.html

if (diagnostics) {
  console.log(diagnostics);
}

const port = 8001;
const app = new Application();

app.use(async (ctx, next) => {
  console.log(`HTTP ${ctx.request.method} on ${ctx.request.url}`);
  await next();
});

const router = new Router();

router
  .get("/", async (ctx) => {
    const path = await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}`,
      index: `./static/index.html`
    });
  })
  .get("/client.js", (ctx) => {
    ctx.response.body = js;
    ctx.response.type = "application/javascript";
  })
  .get("/static/:filename", async (ctx) => {
    const path = await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}` // dont add the 'static' subdir here, because it is already part of the ctx pathname
    });
  });

app.use(router.routes());

app.addEventListener("listen", () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });
