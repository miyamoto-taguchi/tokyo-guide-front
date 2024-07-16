import { FC } from "react";
import { StarFilled, Star } from "@/components/atoms/Icon";
import { useRating } from "@/hooks/useRating";

type RateProps = {
  /** ５段階評価の初期設定値 */
  initialRating: number;
  /** 評価が変更された時に実行される関数 */
  onRatingChange?: (rating: number) => void;
};

/**
 * ５段階評価を星で表現するコンポーネント
 * ・ 5 が最高評価
 */
const Rate: FC<RateProps> = ({ initialRating, onRatingChange }) => {
  const { rating, TOTAL_STARTS, selectRating } = useRating(initialRating);

  const handleRatingClick = (newRating: number) => {
    selectRating(newRating);

    if (onRatingChange) {
      onRatingChange(rating);
    }
  };

  return (
    <div className="flex">
      {Array.from({ length: TOTAL_STARTS }).map((_, index) => {
        const starNumber = index + 1;
        return (
          <span key={starNumber} onClick={() => handleRatingClick(starNumber)}>
            {starNumber <= rating ? <StarFilled /> : <Star />}
          </span>
        );
      })}
    </div>
  );
};

export default Rate;
