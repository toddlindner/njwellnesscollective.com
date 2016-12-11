function loadCards() {
    document.getElementById("count").innerHTML = data.length;

    var t = '';
    var row = 4;

    data = shuffle(data);
    while (data.length % row != 0) {
        data[data.length] = {};
    }

    for (var i = 0; i < data.length; ++i) {
        if (i % row == 0) {
            t += '<div class="card-deck-wrapper"><div class="card-deck">';
        }
        var card = data[i];
        if (card.title1) {
            t += cardhtml(card, i);
        } else {
            t += '<div class="card"></div>';
        }
        if (i % row == (row-1)) {
            t += '</div></div>';
        }
    }

    var cards = document.getElementById("cards");
    cards.innerHTML += t;
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
    t += '<div class="card-img-wrap">';
    t += '<img class="card-img-top" src="cards/' + card.image + '">';
    if (card.sale) {
        t += '<div class="sale">' + card.sale + '</div>';
    }
    t += '</div>';
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
