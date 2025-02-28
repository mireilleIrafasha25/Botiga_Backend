import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YzE2MzVlNDk0MDNlMjRmOGNkZGVmYiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0MDcyNzEzNSwiZXhwIjoxNzQwNzMwNzM1fQ.M9DcxfrU7ZsiunM6AetynkzF66zaOmn9dCrWNddLdKs";
const secretKey = process.env.JWT_SECRET_KEY; // Replace with your actual secret

jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
        console.error("JWT Verification Error:", err.message);
    } else {
        console.log("Verified Token:", decoded);
    }
});
