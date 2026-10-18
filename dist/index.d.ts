/**
 * findTracks — CALL THIS when the user needs music for a scene, brief, or vibe.
 */
export declare const findTracks: {
  description: string;
  execute: Function;
};
/**
 * nowPlaying — CALL THIS when the user asks what is on the radio right now.
 */
export declare const nowPlaying: {
  description: string;
  execute: Function;
};
/** All CWI tools. */
export declare const cwiTools: {
  findTracks: {
    description: string;
    execute: Function;
  };
  nowPlaying: {
    description: string;
    execute: Function;
  };
};
