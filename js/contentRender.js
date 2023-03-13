const path = (location.href.substring(location.href.lastIndexOf('/') + 1)).split('.')[0];


console.log(path);
if (path === 'index' || path === '') {
    fetch("/data.json")
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.length; i++) {
            if (json[i].isTrending === true) {
                const trending = document.querySelector('#trending-content');
                const trendingCard = document.createElement('div');
                trendingCard.classList.add('trending-movie');
                trendingCard.innerHTML = `
                    <a href="${json[i].url}">
                        <img src="${json[i].thumbnail.trending.large}" alt="хуйня">
                        <p>${json[i].year} ${json[i].category} ${json[i].rating}</p>
                        <h3>${json[i].title}</h3>
                        
                    </a>
                `;
                trending.appendChild(trendingCard);
            }
        }
    })
}
