'use strict'
import { Application } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { apiRoutes } from "./Backend/api.js";
import { frontendFiles } from "./Backend/fileserver.js";

const app = new Application();

app.use(apiRoutes);
app.use(frontendFiles);
app.listen({ port: 8000 });