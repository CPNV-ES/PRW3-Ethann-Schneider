# Phonebook
## Getting Started

### Prerequisites

List all dependencies and their version needed by the project as :

* MongoDB (version 4.4 or higher)
* NPM (Node Package Manager version 10 or higher)
* Node.js (version 20 or higher)
* Docker (version 28 or higher) (for integration environment)

### Configuration
#### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Run the following command to install the dependencies:
   ```bash
   npm install
   ```
3. Copy the `.env.example` file to `.env` and fill in the required environment variables. change the values of the environment variables as per your setup.

#### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Run the following command to install the dependencies:
   ```bash
   npm install
   ```

## Deployment

### On dev environment

#### Backend

To run the backend server, use the following command:
```bash
cd backend
npm run dev # Warning if the frontend is not builded, the backend will not be able to serve the frontend files, you will only have the API working
```

To run the linter, use the following command:
```bash
cd backend
npm run lint
```

#### Frontend

Run with frontend builded in the backend directory:
```bash
cd frontend
npm run build # This will build the frontend and place the build files in the backend dist directory
```

To run the frontend development server, use the following command:
```bash
cd frontend
npm run dev
```

### On integration environment

Build the docker image:
```bash
docker build -t phonebook:latest .
```
