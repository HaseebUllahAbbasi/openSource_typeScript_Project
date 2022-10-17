# Backend

- TypeScript: A TypeScript compiler with static set type definitions.
- Ts-node: Allows us to run and configure Typescript execution environments.
- Express: Node.js web application framework for setting and managing web-based server.
- @types/express: Type definitions for Express.
- Morgan: A Node.js HTTP request logger middleware for Node.js.
- @types/morgan: Type definitions for Morgan.
- Axios: A Node.js promise-based HTTP client library for Node.js, for sending HTTP requests to query and consume resources from APIs.
- @types/Axios: Type definitions for Axios.
- Nodemon: A server utility library for monitoring changes of the code on a text editor. It automatically restarts the server whenever code changes are detected.
- Zod: Zod is a TypeScript-first schema declaration and validation library. I'm using the term "schema" to broadly refer to any data type, from a simple string to a complex nested object

## Flags

- --set-upstream:
  is used to map a branch in your local to a branch on remote so that you can just do git push or git pull and it will know which branch to push/pull from
- git branch --set-upstream-to origin test-branch

## Generating Public and Private Keys

  openssl genrsa -out rsa.private 1024
  openssl rsa -in rsa.private -out rsa.public -pubout -outform PEM
  
#### Generate new keys: https://travistidwell.com/jsencrypt/demo/

#### Base64 encode the keys: https://www.base64encode.org/



