let names = ["Honza", "Filip", "Michal", "Terka", "Anička"]

names.forEach((name) => {
    if (name === "Michal") {
        $("ul").append($(`<li><strong> ${name} </strong></li>`));
    } else {
        $("ul").append($(`<li> ${name}</li>`));
    }
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$("body").append($(`<h1> ${additionalBlock.title} </h1>`));
$("body").append($(`<p> ${additionalBlock.text}</p>`));