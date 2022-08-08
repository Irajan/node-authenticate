interface RefreshToken {
  id: number;
  refreshToken: string;
  userId: number;
  expiresAt: Date;
}

export default RefreshToken;

export type RefreshTokenToInsert = Omit<RefreshToken, "id">;
