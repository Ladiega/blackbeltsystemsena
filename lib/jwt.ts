import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "clave-secreta-super-segura";

export function generateToken(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: "1h" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}
