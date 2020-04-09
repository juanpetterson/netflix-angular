export interface MediaState {
  title: string;
  playing: boolean;
  muted: boolean;
  expanded: boolean;
  duration: number;
  currentTime: number;
  seekTime: number;
  error: boolean;
  eventType: string | undefined;
}
