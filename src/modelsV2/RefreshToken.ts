import db from "../db/db";
import { RefreshTokenToInsert } from "../domain/RefreshToken";

import RefreshTokenType from "../domain/RefreshToken";

class RefreshToken {
  private static table = "refresh_token";

  public static async getRefreshToken(
    refreshToken: string
  ): Promise<RefreshTokenType> {
    const refreshTokens = await db(RefreshToken.table)
      .select()
      .where({ refreshToken })
      .first();

    return refreshTokens;
  }

  public static async createRefreshToken(
    refreshToken: RefreshTokenToInsert
  ): Promise<RefreshToken> {
    const newRefreshToken = await db(RefreshToken.table).insert(refreshToken, [
      "refresh_token",
      "user_id",
      "expires_at",
    ]);

    return newRefreshToken;
  }

  public static async deleteByUserId(userId: number): Promise<void> {
    await db(RefreshToken.table).where({ userId }).delete();
  }
}

export default RefreshToken;
