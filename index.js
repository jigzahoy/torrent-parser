const PATTERNS = {
  resolution: /[0-9]{3,4}p/i,
  season: /(?:(?<=S)[0-9]{2})|(?:[0-9]{1,2}(?=x))/i,
  episode: /(?<=E|x)[0-9]{2}/i,
  year: /[(?:20|19)[0-9]{2}]/,
  quality: /(?:PPV\.)?[HP]DTV|(?:HD)?CAM|B[rR]Rip|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|[Bb]lu[Rr]ay|DvDScr|hdtv/,
  codec: /xvid|x26[45]|h\.?264/i,
  audio: /MP3|DD5\.?1|Dual[\- ]Audio|LiNE|DTS|AAC(?:\.?2\.0)?|AC3(?:\.5\.1)?/
}

function cleanString(matchString, rawString) {
  return rawString.replace(matchString, '');
}

/**
 * @param {string} torrentFileName 
 * @returns {object} Metadata based on filename
 */
export default function parseTorrent(torrentFileName) {
  if (typeof torrentFileName !== 'string') return;

  let match, rawString = torrentFileName, endIndex;
  let torrentOutput = {
    title: 'default'
  }

  for (const key in PATTERNS) {
    if (PATTERNS.hasOwnProperty(key)) {
      match = torrentFileName.match(PATTERNS[key]);

      //Skip if match not found.
      if (!match) continue;
    
      // Extract Title
      if (key == 'season') {
        //Index before season number
        endIndex = torrentFileName.search(PATTERNS.season) - 2; 
        torrentOutput['title'] = torrentFileName.substring(0, endIndex).replace(/\./g, ' ');
        rawString = cleanString(torrentFileName.substring(0, endIndex), rawString);
      }

      rawString = cleanString(match[0], rawString);
      torrentOutput[key] = match[0];
    }
  }
  return torrentOutput;
}

