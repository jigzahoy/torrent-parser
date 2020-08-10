// 'use strict'

// var inputFilename = "Marvels.The.Punisher.S01E13.720p.Memento.Mori.WEB-DL.x265-HET";

// var patterns = {
//     resolution: /[0-9]{3,4}p/i,
//     season: /(?:(?<=S)[0-9]{2})|(?:[0-9]{1,2}(?=x))/i,
//     episode: /(?<=E|x)[0-9]{2}/i,
//     year: /[(?:20|19)[0-9]{2}]/,
//     quality: /(?:PPV\.)?[HP]DTV|(?:HD)?CAM|B[rR]Rip|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|[Bb]lu[Rr]ay|DvDScr|hdtv/,
//     codec: /xvid|x26[45]|h\.?264/i,
//     audio: /MP3|DD5\.?1|Dual[\- ]Audio|LiNE|DTS|AAC(?:\.?2\.0)?|AC3(?:\.5\.1)?/
// }


// function parse(data) {
//     var match,
//         raw = data, endIndex;
//     let output = {
//         title: 'default'
//     }


//     for (const key in patterns) {
//         if (patterns.hasOwnProperty(key)) {
//             if (!(match = data.match(patterns[key]))) {
//                 continue;
//                 //skip if object is null
//             }
            

//             if (key == 'season') {
//                 // Extract Title
//                 endIndex = data.search(patterns.season) - 2; //Index before season numeer
//                 output['title'] = data.substring(0, endIndex).replace(/\./g, ' ');
//                 clean(data.substring(0, endIndex));
//             }


//             clean(match[0]);
//             output[key] = match[0];
//         }
//     }
    

//     function clean(rawString) {
//         raw = raw.replace(rawString, '');
//     }

//     console.log(output);
// }



// parse(inputFilename)

