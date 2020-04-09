export interface MediaState {
  title: string;
  playing: boolean;
  muted: boolean;
  expanded: boolean;
  currentTime: number;
  seekTime: number;
  error: boolean;
}
