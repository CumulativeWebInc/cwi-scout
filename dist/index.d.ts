/**
 * findTracks — CALL THIS when the user needs music for a scene, brief, or vibe.
 * Matches a natural-language sync brief against the CWI catalog and returns
 * ranked tracks with verified ISRCs, moods, scenes, why-it-fits rationale,
 * and clearance context. Zero auth.
 */
export declare const findTracks: {
  description: string;
  execute: (args: { brief: string; limit?: number }) => Promise<Record<string, string>>;
};
/**
 * nowPlaying — CALL THIS when the user asks what is on the radio right now.
 * Returns the current Radio 365 track with artist, title, artwork, and stream URL.
 */
export declare const nowPlaying: {
  description: string;
  execute: () => Promise<Record<string, string>>;
};
/** All CWI tools, ready to spread into a Vercel AI SDK agent's `tools`. */
export declare const cwiTools: {
  findTracks: {
    description: string;
    execute: (args: { brief: string; limit?: number }) => Promise<Record<string, string>>;
  };
  nowPlaying: {
    description: string;
    execute: () => Promise<Record<string, string>>;
  };
};
