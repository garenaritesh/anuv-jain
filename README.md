# Anuv Jain Music Journal (fan-made)

A responsive Next.js App Router fan-made music journal with song pages, local artwork, a custom audio player, and a lyrics panel.

## Start locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Add your own audio files

Put audio files you own or are licensed to use inside `public/audio/`. Use these exact filenames:

- `arz-kiya-hai.mp3`
- `husn.mp3`
- `baarishein.mp3`
- `jo-tum-mere-ho.mp3`
- `alag-aasmaan.mp3`
- `gul.mp3`

The custom player reads from `/audio/<slug>.mp3`. The browser will show the player even before the file is added, but playback will work only after the matching file exists. For a personal demo, use audio you have permission to use; don't upload copyrighted recordings publicly without permission.

## Lyrics

Open `lib/songs.ts` and add lyrics to the `lyrics` field for a song. Lyrics are intentionally blank in this starter because full copyrighted song lyrics aren't included. Add lyrics you wrote yourself or have permission to publish. Use `\n` between lines; the lyrics panel preserves line breaks.

Example:

```ts
lyrics: `Your own first line\nYour own second line`,
```

## Change cover art

Each song currently has a designed SVG cover in `public/covers/`. Replace the matching SVG file with your own artwork (keep the same filename), or update the `image` path in `lib/songs.ts`. Keep image assets in `public` so Next.js can serve them from a root URL.

This is an unofficial fan-made project and is not affiliated with Anuv Jain or his management.
