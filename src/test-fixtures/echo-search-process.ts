import { serveSearchProcess } from "../search-process";

await serveSearchProcess(async (args, sessionID) =>
  JSON.stringify({ args, sessionID }),
);
