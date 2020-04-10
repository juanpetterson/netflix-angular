export const EVENT_PLAY = 'play';
export const EVENT_PAUSE = 'pause';
export const EVENT_MUTE = 'mute';
export const EVENT_UNMUTE = 'unmute';
export const EVENT_SEEKBACK = 'seekback';
export const EVENT_SEEKFORWARD = 'seekforward';
export const EVENT_FULLSCREEN = 'fullscreen';
export const EVENT_FULLSCREEN_EXIT = 'fullscreenExit';

export interface MediaState {
  title: string;
  playing: boolean;
  muted: boolean;
  expanded: boolean;
  duration: number;
  currentTime: number;
}
