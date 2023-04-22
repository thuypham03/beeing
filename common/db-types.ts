type Id = {
  readonly id: string;
};

export type Brand = {
  readonly name: string;
  readonly avatar: string | null;
  readonly address: string | null;
  readonly phone: string | null;
  readonly website: string | null;
  readonly email: string | null;
  readonly facebook: string | null;
  readonly instagram: string | null;
  readonly youtube: string | null;
  readonly photos: readonly string[]; // can be empty
}

export type BrandWithId = Brand & Id;

export type DetailedRating = {
  readonly communication: number;
  readonly value: number;
  readonly hospitality: number;
};

export type Review = {
  readonly brandId?: string | null;
  readonly userId?: string | null;
  readonly likes: number;
  readonly date: Date;
  readonly detailedRatings: DetailedRating;
  readonly overallRating: number;
  readonly photos: readonly string[];
  readonly reviewText: string;
  readonly status?: 'PENDING' | 'APPROVED' | 'DECLINED';
};

export type ReviewWithId = Review & Id;

export type Campaign = {
  readonly brandId: string;
  readonly name: string;
  readonly begin: Date;
  readonly end: Date | null; // null - no end date
  readonly status?: 'ONGOING' | 'PASSED';
}

export type CampaignWithId = Campaign & Id;

export type User = {
  readonly name: string;
  readonly avatar: string | null;
  readonly address: string | null;
  readonly phone: string | null;
  readonly website: string | null;
  readonly email: string | null;
  readonly facebook: string | null;
  readonly instagram: string | null;
  readonly youtube: string | null;
  readonly photos: readonly string[]; // can be empty
}

export type UserWithId = User & Id;

export type Request = {
  readonly userId: string;
  readonly campaignId: string;
  readonly brandId: string;
  readonly status: 'PENDING' | 'APPROVED' | 'DECLINED';
}