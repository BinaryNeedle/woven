import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { schema } from "./../schema";
import { graphql } from "graphql";
import type { APIEvent } from "@solidjs/start/server";

const wsServer = new WebSocketServer({
  port: 5000,
  path: "/graphql",
});

useServer({ schema }, wsServer);

const handler = async (event: APIEvent) => {
  const body = await new Response(event.request.body).json();

  const result = await graphql({ schema, source: body.query });

  return result;
};

export const GET = handler;
export const POST = handler;
