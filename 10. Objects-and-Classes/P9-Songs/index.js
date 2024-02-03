function filterSongs(input) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  const n = input[0];
  const songs = [];

  for (let i = 1; i <= n; i++) {
    const [typeList, name, time] = input[i].split("_");
    songs.push(new Song(typeList, name, time));
  }

  const filterTypeList = input[input.length - 1];

  for (const song of songs) {
    if (filterTypeList === "all" || song.typeList === filterTypeList) {
      console.log(song.name);
    }
  }
}
