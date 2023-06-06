type Id = {
  readonly id: string;
};

// Login types
export type UserType = {
  readonly type: 'BRAND' | 'INFLUENCER';
}

export type Address = {
  readonly street?: string | null;
  readonly apartment?: string | null;
  readonly city?: string | null;
  readonly zip?: number | null;
  readonly state?: string | null;
  readonly country?: string | null;
}

export type BasicInfo = {
  readonly avatar?: string | null;
  readonly address?: Address | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly website?: string | null;
  readonly photos?: string[]; // can be empty
  readonly socialMedia?: SocialMedia;
}

export type SocialMedia = {
  readonly facebook?: string | null;
  readonly instagram?: string | null;
  readonly youtube?: string | null;
  readonly tiktok?: string | null;
  readonly twitch?: string | null;
  readonly twitter?: string | null;
}

export type Brand = {
  readonly name?: string;
  readonly sector?: string;
  readonly description?: string | null;
  readonly channel?: 'ONLINE' | 'IN-PERSON' | 'BOTH';
}

export type Influencer = {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly yearOfBirth?: number;
  readonly gender?: string;
}

export type UserWithId = Id & UserType & BasicInfo & Brand & Influencer;

// Rating types
export type DetailedRating = {
  readonly communication: number;
  readonly value: number;
  readonly hospitality: number;
};

export type Review = {
  readonly brandId?: string | null;
  readonly influencerId?: string | null;
  readonly likes: number;
  readonly date: Date;
  readonly detailedRatings: DetailedRating;
  readonly overallRating: number;
  readonly photos: readonly string[];
  readonly reviewText: string;
  readonly status?: 'PENDING' | 'APPROVED' | 'DECLINED';
};

export type ReviewWithId = Review & Id;

// Campaign types
export type Campaign = {
  readonly brandId: string;
  readonly name: string;
  readonly begin: Date;
  readonly end: Date | null; // null - no end date
  readonly status?: 'ONGOING' | 'PASSED';
}

export type CampaignWithId = Campaign & Id;

export type Request = {
  readonly userId: string;
  readonly campaignId: string;
  readonly brandId: string;
  readonly status: 'PENDING' | 'APPROVED' | 'DECLINED';
}