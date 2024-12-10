import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { schema } from './../schema'; // Adjust this based on your schema file path
import { createYoga } from 'graphql-yoga';
import { createServer } from 'http';

// Create the Yoga GraphQL server
const yogaApp = createYoga({
  schema,
  graphiql: {
    subscriptionsProtocol: 'WS', // Enable WS for GraphiQL subscriptions
  },
});

// Create HTTP server from Yoga app
const server = createServer(yogaApp);

// Create WebSocket server instance
const wsServer = new WebSocketServer({
  server, // Attach WebSocket server to the same HTTP server
  path: '/graphql', // WebSocket path for GraphQL subscriptions
});

// Connect WebSocket server to GraphQL schema
useServer({ schema }, wsServer);

// Export the server for use in your app configuration
export default server;
