import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import client from "./client.js";
import { ApolloProvider } from "@apollo/client";

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
