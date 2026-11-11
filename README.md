# Node.js + npm + Jenkins demo

A small dependency-free Node.js web app for demonstrating npm scripts in a Jenkins build.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```sh
npm ci
npm test
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000). The health endpoint is available at [http://localhost:3000/health](http://localhost:3000/health).

The npm scripts demonstrate the usual CI workflow:

- `npm test` runs the built-in Node.js test runner.
- `npm run build` copies the app into `dist/`, which is the deployable build output.
- `npm start` starts the app from `src/`; use `node dist/server.js` to run the build output.

Set the `PORT` environment variable to change the listening port.

## Run in Jenkins

1. Create a Pipeline job pointing at this repository and its `Jenkinsfile`.
2. Ensure the Jenkins agent has Node.js 18+ and npm installed and available on `PATH`.
3. Run the job. It checks out the source, installs from the lockfile, runs tests, builds the app, and archives `dist/**` as a Jenkins artifact.

The pipeline uses shell steps on a Unix-like agent. For a Windows agent, replace `sh` steps in the `Jenkinsfile` with equivalent `bat` steps.
