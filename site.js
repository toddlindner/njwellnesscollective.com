function loadCards() {
    var t = '';
    var row = 4;

    data = shuffle(data);

    for (var i = 0; i < data.length; ++i) {
        if (i % row == 0) {
            t += '<div class="card-deck-wrapper"><div class="card-deck">';
        }
        t += cardhtml(data[i], i);
        if (i % row == (row-1)) {
            t += '</div></div>';
        }
    }

    var cards = document.getElementById("cards");
    cards.innerHTML += t;

    document.getElementById("count").innerHTML = data.length;
}

function cardhtml(card, index) {
    var url = card.url;
    var linktext = card.url;
    if (url.indexOf("@") > -1) {
        url = "mailto:" + url;
        linktext = "Email " + linktext;
    } else if (url.indexOf("http") < 0) {
        url = "http://" + url;
    }
    var t = '';
    t += '<div class="card">';
    t += '<a href="' + url + '" target="_new_' + index + '">';
    t += '<img class="card-img-top" src="cards/' + card.image + '">';
    t += '<div class="card-block">';
    t += '<p class="card-title-1">' + card.title1 + '</p>';
    t += '<p class="card-title-2">' + card.title2 + '</p>';
    t += '<p class="card-url">' + linktext + '</p>';
    t += '<p class="card-text">';
    t += card.text;
    t += '</p></div>';
    t += '</a>';
    t += '</div>';
    return t;
}

function shuffle(array) {
    var currentIndex = array.length;
    while (0 !== currentIndex) {
        var r = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        var t = array[currentIndex];
        array[currentIndex] = array[r];
        array[r] = t;
    }
    return array;
}

loadCards();
