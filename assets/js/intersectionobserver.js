// Alle links uit het HTML document ophalen.
let alleLinks = document.querySelectorAll("nav a");

// Alle sections uit het HTML document ophalen.
let alleSecties = document.querySelectorAll("section");

// We maken onze instellingen aan voor onze observer.
const opties = {
    rootMargin: "-150px",
    treshold: 1.0
};

// We maken een doorsnijde aan voor onze observer.
const verwerkDoorsnijding = (entries, observer) => {
    entries.forEach(entry => {
        // ! For DEBUG use only.
        // console.log(`${entry.target.id}: Doorsnijdt - ${entry.isIntersecting}`);

        if(entry.isIntersecting) {
            let link = zoekBijpassendeLink(`#${entry.target.id}`);
            maakActief(link);
        }
    });
}

// We maken een Intersection Observer aan.
let observer = new IntersectionObserver(verwerkDoorsnijding, opties);

// We zorgen dat de observer naar de eerste sectie gaat kijken.
alleSecties.forEach(sectie => {
    observer.observe(sectie);
});

// Een functie maken die de "active" class weghaalt als deze niet meer actief is.
const verwijderActief = () => {
    alleLinks.forEach((link) => {
        if(link.classList = "active") {
            link.classList.remove("active");
        }
    });
}

// Een functie maken die de "active" class geeft aan de juiste link.
const maakActief = (elem) => {
    verwijderActief();
    elem.classList.add("active");
}

alleLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
     e.preventDefault();
     maakActief(e.target);
     window.location = e.target.href;
    });
});

// Een functie maken die de passende link opzoekt.
const zoekBijpassendeLink = (id) => {
    let link = document.querySelector(`nav a[href="${id}"]`);
    return link;
}