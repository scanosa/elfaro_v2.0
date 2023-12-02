const marvel = {
    render: () => {
        

      const urlAPI = 'https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=a7b7a94c4db731b7ff25e05ac8e4906e&hash=f0d61ffd881e7e6391ab9df53b08ceba';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const hero of json.data.results) {
            let urlHero = hero.urls[0].url;
            contentHTML += `
              <div class="col-md-4">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.title}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${hero.title}</h3>
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
  };
  marvel.render();