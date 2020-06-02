function setup() {
    shuffledMembers = shuffle(members);
    renderCards(shuffledMembers);
}

function renderCards(arr) {
    $('.member-row').remove();
    for (let i = 0; i < arr.length; i++) {
        if (i % 3 == 0) {
            $(".team-heading").append(`<div class='row row${ i / 3 } member-row'></div>`);
        }
        let element = `<div class="col-md-4">
        <div class="fh5co-person text-center">
            <figure><img src="${ arr[i].img }" alt="Image"></figure>
            <h3>${ arr[i].name }</h3>
            <span class="fh5co-position">${ arr[i].title }</span>
            <p class="description">${ arr[i].desc }
            </p>
            <ul class="social social-circle">
                <li><a href="${ arr[i]["link1"] }" target="_blank"><i
                            class="${ arr[i]["link1-class"] }"></i></a></li>
                <li><a href="${ arr[i]["link2"] }" target="_blank"><i class="${ arr[i]["link2-class"] }"></i></a>
                </li>
                <li><a href="${ arr[i]["link3"] }" target="_blank"><i
                            class="${ arr[i]["link3-class"] }"></i></a></li>
            </ul>
        </div>
    </div>`;
        $(`.row${ Math.floor(i / 3) }`).append(element);
        if (i % 3 == 2) {
            $(".team-heading").append(`<div class="row member-row"><br /><br /><br /></div>`);
        }
        console.log('approved')
    }
}