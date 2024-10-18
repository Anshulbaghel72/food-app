import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

// Extend the Express Request interface to include the user ID
declare global {
    namespace Express {
        interface Request {
            id: string;
        }
    }
}

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.cookies?.token;  // Check if token exists in cookies

        if (!token) {
            res.status(401).json({
                success: false,
                message: "User not authenticated"
            });
            return;  // Ensure function exits after sending the response
        }

        // Verify the token using the secret key
        const decode = jwt.verify(token, process.env.SECRET_KEY!) as jwt.JwtPayload;

        if (!decode || !decode.userId) {  // Ensure `decode` has the expected structure
            res.status(401).json({
                success: false,
                message: "Invalid token"
            });
            return;  // Ensure function exits after sending the response
        }

        // Assign user ID from decoded token to the request object
        req.id = decode.userId;
        next();  // Pass control to the next middleware
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            // error: error.message|| "An error occurred"
        });
        return;  // Ensure function exits after sending the response
    }
};
