import { NextRequest, NextResponse } from "next/server";

export type FetchSampleApiResponse = {
  name: string;
  email: string;
};

/**
 * テスト用のサンプルAPI
 * @param request
 * @returns 名前とメールアドレス
 */
export function GET(
  request: NextRequest
): NextResponse<FetchSampleApiResponse> {
  console.log("sample api");
  // GET /api/fetchSample リクエストの処理
  return NextResponse.json({ name: "yamada", email: "sample@test.com" });
}
