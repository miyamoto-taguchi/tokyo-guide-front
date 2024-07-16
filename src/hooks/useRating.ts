import { useState } from "react";

export const useRating = (
  /** ５段階評価の初期設定値 */
  initialRating: number
) => {
  const [rating, setRating] = useState(initialRating);
  const TOTAL_STARTS = 5;

  /**
   * 変更後のレートをセットし、カスタムフックを実行する
   * @param newRating 変更後のレート
   */
  const selectRating = (newRating: number) => {
    setRating(newRating);
  };

  return {
    /** 現在のレート */
    rating,
    /** 評価の最大値 */
    TOTAL_STARTS,
    /** 変更後のレートをセットし、カスタムフックを実行する関数 */
    selectRating,
  };
};
