import { ReviewWithId } from "../../../common/db-types";

export const averageRatings = (ratings: ReviewWithId[]) => {
  const sum = ratings.reduce((acc, rating) => {
    return acc + rating.overallRating;
  }, 0);
  
  return (sum ? sum / ratings.length : 0);
}