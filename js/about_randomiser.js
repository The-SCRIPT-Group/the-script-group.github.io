function setup() {
    shuffledMembers = shuffle(members);
    for (let i = 0; i < shuffledMembers.length; i++) {
        if (i % 3 == 0) {
            $(".team-heading").append(`<div class='row row${ i / 3 }'></div>`);
        }
        let element = `<div class="col-md-4">
        <div class="fh5co-person text-center to-animate">
            <figure><img src="${ shuffledMembers[i].img }" alt="Image"></figure>
            <h3>${ shuffledMembers[i].name }</h3>
            <span class="fh5co-position">${ shuffledMembers[i].title }</span>
            <p class="description">${ shuffledMembers[i].desc }
            </p>
            <ul class="social social-circle">
                <li><a href="${ shuffledMembers[i]["link1"] }" target="_blank"><i
                            class="${ shuffledMembers[i]["link1-class"] }"></i></a></li>
                <li><a href="${ shuffledMembers[i]["link2"] }" target="_blank"><i class="${ shuffledMembers[i]["link2-class"] }"></i></a>
                </li>
                <li><a href="${ shuffledMembers[i]["link3"] }" target="_blank"><i
                            class="${ shuffledMembers[i]["link3-class"] }"></i></a></li>
            </ul>
        </div>
    </div>`;
        $(`.row${ Math.floor(i / 3) }`).append(element);
        if (i % 3 == 2) {
            $(".team-heading").append(`<div class="row"><br /><br /><br /></div>`);
        }
    }
}