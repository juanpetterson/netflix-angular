export interface MediaResponse {
  id: number;
  title: string;
  thumbnail: string;
  thumbnailLogo: string;
  poster: string;
  topPoster: string;
  billboard: string;
  media: string;
  synopsis: string;
  maturity: number;
  match: string;
  lastRelease: string;
  top10: boolean;
  originals: boolean;
  duration: string;
  starring: string[];
  genres: string[];
  tags: string[];
}