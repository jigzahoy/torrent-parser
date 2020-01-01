const PATTERNS = {
  resolution: /[0-9]{3,4}p/i,
  season: /(?:(?<=S)[0-9]{2})|(?:[0-9]{1,2}(?=x))/i,
  episode: /(?<=E|x)[0-9]{2}/i,
  year: /[(?:20|19)[0-9]{2}]/,
  quality: /(?:PPV\.)?[HP]DTV|(?:HD)?CAM|B[rR]Rip|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|[Bb]lu[Rr]ay|DvDScr|hdtv/,
  codec: /xvid|x26[45]|h\.?264/i,
  audio: /MP3|DD5\.?1|Dual[\- ]Audio|LiNE|DTS|AAC(?:\.?2\.0)?|AC3(?:\.5\.1)?/
}

export default function parseTorrent(filename) {
  'use strict'
  let match, rawString = filename, endIndex;
  let torrentOutput = {
    title: 'default'
  }

  for (const key in PATTERNS) {
    if (PATTERNS.hasOwnProperty(key)) {
      match = filename.match(PATTERNS[key]);

      if (!match) {
        //Skip if match not found.
        continue;
      }

      /**
       * Extract Title
       */
      if (key == 'season') {
        //Index before season numeer
        endIndex = filename.search(PATTERNS.season) - 2; 
        torrentOutput['title'] = filename.substring(0, endIndex).replace(/\./g, ' ');
        rawString = cleanString(filename.substring(0, endIndex), rawString);
      }

      rawString = cleanString(match[0], rawString);
      torrentOutput[key] = match[0];
    }
  }

  return torrentOutput
}

function cleanString(matchString, rawString) {
  return rawString.replace(matchString, '');
}