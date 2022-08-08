import fs from "fs";
import jwt from "jsonwebtoken";

/**
 * Write to a file.
 * @param {string} filename
 * @param {object} content
 */
export const writeDataToFile = (filename: string, content: object) => {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8");
};

export const createAccessToken = (data: any): string => {
  const accessToken = jwt.sign(data, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRATION_INTERVAL as string,
  });

  return accessToken;
};
