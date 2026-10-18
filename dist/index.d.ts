/**
 * Parameters for the findTracks tool.
 */
export interface FindTracksParams {
    brief: string;
    limit?: number;
}
/**
 * Parameters for the nowPlaying tool (no parameters).
 */
export interface NowPlayingParams {
}
/**
 * A CWI tool that can be used with the Vercel AI SDK.
 */
export interface CwiTool<TParams> {
    description: string;
    parameters: unknown;
    execute: (args: TParams, options?: unknown) => Promise<unknown>;
}
/**
 * findTracks — CALL THIS when the user needs music for a scene, brief, or vibe.
 * Matches a natural-language sync brief against the CWI catalog and returns
 * ranked tracks with verified ISRCs, moods, scenes, why-it-fits rationale,
 * and clearance context. Zero auth.
 */
export declare const findTracks: CwiTool<FindTracksParams>;
/**
 * nowPlaying — CALL THIS when the user asks what is on the radio right now.
 * Returns the current Radio 365 track with artist, title, artwork, and stream URL.
 */
export declare const nowPlaying: CwiTool<NowPlayingParams>;
/** All CWI tools, ready to spread into a Vercel AI SDK agent's `tools`. */
export declare const cwiTools: {
    findTracks: CwiTool<FindTracksParams>;
    nowPlaying: CwiTool<NowPlayingParams>;
};
