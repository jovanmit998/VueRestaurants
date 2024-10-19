interface FormattedRequest {
  date: string;
  mediumDate: string;
  service: string;
  shortDate: string;
  size: string;
  time: string;
}
interface FallBackText {
  subtitle: string;
  title: string;
}
interface Fallback {
  dates: FallBackText;
  method: string;
  option: FallBackText & { action: string };
  venues: FallBackText;
}

interface RecommendedRestaurant {
  id: string;
  method: string;
  text: string;
  time: string;
}
interface RecommendedMethod
  extends Pick<RecommendedRestaurant, "method" | "time"> {}

interface Page {
  fallback: Fallback;
  generalError: string;
  showLess: string;
  showMore: string;
  subtitle: string;
  title: string;
  recommended: [RecommendedRestaurant, RecommendedMethod];
}

interface Availability {
  availability_id: string;
  formattedRequest: FormattedRequest;
  method: string;
  page: Page;
}

interface Post {
  availability_search: number;
  page_slug: string;
  score: number;
  slug: string;
  venue_name: string;
  version: number;
}

export interface Restaurant {
  availability: Availability;
  post: Post;
}

export interface SearchTokenRequest {
  date: string;
  time: string;
  size: string;
}

export interface AuthTokenResponse {
  jwt_token: string;
  refresh_token: string;
}

export interface SearchIdResponse {
  criteria: SearchTokenRequest;
  keywords: { geocodes: string[] };
  locale: string;
  search_id: string;
}
