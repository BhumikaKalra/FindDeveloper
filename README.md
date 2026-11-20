# FindDeveloper
Find developers on a collaboration platform where they can meet and send project collaboration requests.

## Run the backend

From the `Backend` directory:

```bash
npm install
npm run dev
```

Replace the placeholder connection string in `Backend/Config/Database.js` with your MongoDB Atlas URI, including the database name. URL-encode special characters in the password. Keep credentials private and do not commit them.

The server listens on port 4000. To create the sample user, send a `POST` request to `http://localhost:4000/signup`.
