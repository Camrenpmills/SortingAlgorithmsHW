//Welcome Statment
console.log('Welcome to the Video Game Sorter. We will Sort a list of Pokemon Games. ')


//List of games 
const videoGames = [
    { title: 'Pokemon Red and Blue', releaseYear: 1996 },
    { title: 'Pokemon Gold and Silvir', releaseYear: 1999 },
    { title: 'Pokemon Ruby and Sapphire  ', releaseYear: 2002 },
    { title: 'Pokemon Emerlad', releaseYear: 2004 },
    { title: 'Pokemon Diamond and Pearl', releaseYear: 2006},
    { title: 'Pokemon Platinium', releaseYear: 2008},
    { title: 'Pokemon Black and White', releaseYear: 2010},
    { title: 'Pokemon X and Y', releaseYear: 2013},
    { title: 'Pokemon Omega Ruby and Omega Sapphire', releaseYear: 2006},
    { title: 'Pokemon Sun and Moon', releaseYear: 2016},
    { title: 'Pokemon Sowrd and Shield', releaseYear: 2019},
    { title: 'Pokemon Legned of Arceus', releaseYear: 2022},
    { title: 'Pokemon Scarlet and Viloet', releaseYear: 2022},

  ];
  

  //if Statment 
  function bubbleSort(videoGames) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < videoGames.length - 1; i++) {
        if (videoGames[i].releaseYear > videoGames[i + 1].releaseYear) {
          // Swap elements
          let temp = videoGames[i];
          videoGames[i] = videoGames[i + 1];
          videoGames[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return videoGames;
  }
  
  // The sorted list of video games by release year will show 
  const sortedVideoGames = bubbleSort(videoGames);
  
  // The output of sorted games 
  console.log('This is the sorted list of Pokemon video games by release year stating from 1996 to 2022.');
  sortedVideoGames.forEach(game => console.log(`${game.title} (${game.releaseYear})`));
  