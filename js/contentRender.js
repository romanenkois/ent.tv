const path = (location.href.substring(location.href.lastIndexOf('/') + 1)).split('.')[0];


console.log(path);
if (path === 'index' || path === '') {
    fetch("/data.json")
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.length; i++) {
            if (json[i].isTrending === true) {
                document.querySelector('#trending-content').insertAdjacentHTML("beforeend",`
                    <div class="movie-render-frame">
                        <a href="watch.html?${json[i].title}"><img class="movie-img" src="${json[i].thumbnail.trending.small}" alt="хуйня"></a>
                        <p class="movie-info">${json[i].year} ${json[i].category} ${json[i].rating}</p>
                        <h3 class="movie-name">${json[i].title}</h3>
                    </div>
                `)
            } else {
                document.querySelector('#main-content').insertAdjacentHTML("beforeend",`
                        <div class="movie-render-frame">
                            <a href="watch.html?${json[i].title}"><img class="movie-img" src="${json[i].thumbnail.regular.small}" alt="хуйня"></a>
                            <p class="movie-info">${json[i].year} ${json[i].category} ${json[i].rating}</p>
                            <h3 class="movie-name">${json[i].title}</h3>
                        </div>
                `)
            }
        }
    })
}
