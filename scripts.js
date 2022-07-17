let names = ["Honza", "Filip", "Michal", "Terka", "Anička"]

names.forEach((name) => {
    if (name === "Michal") {
        $("ul").append($("<li>").html(`<strong> ${name} </strong>`));
    } else {
        $("ul").append($("<li>").html(name));
    }
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

