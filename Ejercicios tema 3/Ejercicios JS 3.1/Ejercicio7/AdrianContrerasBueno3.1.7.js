fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then(data =>{
    data.forEach(album => {
        if (album.userId==3) {
            console.log(album.title);   
        }
      });
  }).catch(error => console.log(error));
