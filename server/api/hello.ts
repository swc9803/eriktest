import type { IncomingMessage, ServerResponse } from "http";
import * as url from "url";

import axios from "axios";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const queryObject = url.parse(req.url as string, true).query;
  console.log(queryObject);
  let data = { data: [{ data: "" }] };

  const { search } = queryObject;
  if (search) {
    data = await $fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
};
