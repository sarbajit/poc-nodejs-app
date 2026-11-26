# poc-nodejs-app

Hello World Node.js application (Express).

## npm registry (Nexus)

The project [.npmrc](.npmrc) points npm at Nexus `npm-group`. It reads the credential from the
`NEXUS_NPM_AUTH` env var (base64 of `username:password`) — set it once on your machine:

```powershell
# PowerShell (persists for your user)
$auth = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("<user>:<password>"))
[Environment]::SetEnvironmentVariable("NEXUS_NPM_AUTH", $auth, "User")
```

```bash
# Linux/macOS (add to ~/.bashrc or ~/.zshrc)
export NEXUS_NPM_AUTH=$(printf '%s' '<user>:<password>' | base64)
```

## Run

```bash
npm install
npm start
```

Then open http://localhost:3000/ — health check at http://localhost:3000/health

## Test

```bash
npm test
```
