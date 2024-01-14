const cardClass = document.querySelectorAll(".card")

document.addEventListener("click", click)

function click(e) {
    const findClickedCard = e.target.id
    const clickedCard = document.querySelector(`#${findClickedCard}`)
    for (i = 0; i < cardClass.length; i++) {
        cardClass[i].style.width = "10%"
    }
    clickedCard.style.width = "50%"
    clickedCard.style.transition = "0.3s ease-out"
    card1Choosed(findClickedCard, clickedCard)
    card2Choosed(findClickedCard, clickedCard)
    card3Choosed(findClickedCard, clickedCard)
    card4Choosed(findClickedCard, clickedCard)
    card5Choosed(findClickedCard, clickedCard)
    card6Choosed(findClickedCard, clickedCard)
    return clickedCard, findClickedCard
}

function card1Choosed(findClickedCard, clickedCard) {
    if (findClickedCard == "card1") {
        clickedCard.style.backgroundImage = "url(https://static.wikia.nocookie.net/tokyoghoul/images/6/68/Season_Two_Box_Set_Cover.png/revision/latest?cb=20160218221525)"
        clickedCard.style.backgroundPosition = "10%"
        clickedCard.style.backgroundSize = "cover"
    }
    else {
        cardClass[0].style.backgroundImage = "url(https://media.comicbook.com/2017/06/tokyo-ghoul-anime-1477547440-16d366ea1f605e55e78bcdffe3b09f5e-1004079.jpeg?auto=webp)"
        cardClass[0].style.backgroundPosition = "70%"
        cardClass[0].style.backgroundSize = "cover"
    }
}

function card2Choosed(findClickedCard, clickedCard) {
    if (findClickedCard == "card2") {
        clickedCard.style.backgroundImage = "url(https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/JzL1NLQvok7Pghe9W5PP2XNV.png)"
        clickedCard.style.backgroundPosition = "55%"
    }
    else {
        cardClass[1].style.backgroundImage = "url(https://butwhytho.net/wp-content/uploads/2023/06/Demon-Slayer-Season-3-But-Why-Tho.jpg)"
        cardClass[1].style.backgroundPosition = "40.5%"

    }
}

function card3Choosed(findClickedCard, clickedCard) {
    if (findClickedCard == "card3") {
        clickedCard.style.backgroundImage = "url(https://m.media-amazon.com/images/I/81fwz66nrvL._AC_UF1000,1000_QL80_.jpg)"
        clickedCard.style.backgroundPosition = "55%"

    }
    else {
        cardClass[2].style.backgroundImage = "url(https://cdn.kayiprihtim.com/wp-content/uploads/2021/06/Naruto-goz.jpg)"
        cardClass[2].style.backgroundPosition = "43%"

    }
}

function card4Choosed(findClickedCard, clickedCard) {
    if (findClickedCard == "card4") {
        clickedCard.style.backgroundImage = "url(https://m.media-amazon.com/images/M/MV5BMTdmYmVlODktNWM0Yi00NDNlLWJhMjQtMzg1MzVhYzU1N2IwXkEyXkFqcGdeQXVyMTcxNDcyNDA4._V1_FMjpg_UX1000_.jpg)"

    }
    else {
        cardClass[3].style.backgroundImage = "url(https://hips.hearstapps.com/vidthumb/images/tokyo-revengers-season-3-64be9ff2ad249.jpg?crop=1xw:0.9971273291925465xh;center,top&resize=1200:*)"
        cardClass[3].style.backgroundPosition = "40%"
    }
}

function card5Choosed(findClickedCard, clickedCard) {
    if (findClickedCard == "card5") {
        clickedCard.style.backgroundImage = "url(https://m.media-amazon.com/images/I/81vh8ZLpHEL._AC_UF1000,1000_QL80_.jpg)"
        clickedCard.style.backgroundPosition = "55%"
    }
    else {
        cardClass[4].style.backgroundImage = "url(https://gameranx.com/wp-content/uploads/2022/12/Reboot_GANX.jpg)"
        cardClass[4].style.backgroundPosition = "32%"
    }
}

function card6Choosed(findClickedCard, clickedCard) {
    if (findClickedCard == "card6") {
        clickedCard.style.backgroundImage = "url(https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg)"

    }
    else {
        cardClass[5].style.backgroundImage = "url(https://i.ytimg.com/vi/dvztHditU0I/maxresdefault.jpg)"
        cardClass[5].style.backgroundPosition = "%"
    }
}