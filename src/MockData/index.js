const BROWSE_DATA = {
  recently: {
    r01: { name: "Lover", singer: "Taylor Swift", img: "taylor", songs: "3" },
    r02: { name: "差不多姑娘", singer: "G.E.M 鄧紫琪", img: "gem", songs: "1" },
    r03: {
      name: "查無此人",
      singer: "宇宙人",
      img: "Cosmospeople",
      songs: "10"
    }
  },
  popular: {
    p01: {
      name: "NO.6 Collaborations Project",
      singer: "Ed Sheehan",
      img: "no6",
      songs: "15"
    },
    p02: {
      name: "Can We Pretend(The Remixes)",
      singer: "P!nk",
      img: "canwe",
      songs: "4"
    }
  },
  mood: {
    m01: { name: "relax", singer: "relax", img: "relax", songs: "2" },
    m02: { name: "nature", singer: "nature", img: "nature", songs: "3" }
  }
};

const ALL_ALBUM = {
  taylor: {
    name: "Lover",
    singer: "Taylor Swift",
    img: "taylor",
    songs: ["The Archer", "You Need to Calm Down", "Me!"],
    year: "2019"
  },
  gem: {
    name: "差不多姑娘",
    singer: "G.E.M 鄧紫琪",
    img: "gem",
    songs: ["差不多姑娘"],
    year: "2019"
  },
  Cosmos: {
    name: "查無此人",
    singer: "宇宙人",
    img: "Cosmospeople",
    songs: ["Track 01", "Track 02", "Track 03", "Track 04", "Track 05"],
    year: "2019"
  },
  no6: {
    name: "NO.6 Collaborations Project",
    singer: "Ed Sheehan",
    img: "no6",
    songs: ["Track 01", "Track 02", "Track 03", "Track 04", "Track 05"],
    year: "2019"
  },
  canwe: {
    name: "Can We Pretend(The Remixes)",
    singer: "P!nk",
    img: "canwe",
    songs: ["Track 01", "Track 02", "Track 03", "Track 04", "Track 05"],
    year: "2019"
  },
  relax: {
    name: "relax",
    singer: "relax",
    img: "relax",
    songs: ["Track 01", "Track 02"],
    year: "2019"
  },
  nature: {
    name: "nature",
    singer: "nature",
    img: "nature",
    songs: ["Track 01", "Track 02", "Track 03"],
    year: "2019"
  }
};

export { BROWSE_DATA, ALL_ALBUM };
