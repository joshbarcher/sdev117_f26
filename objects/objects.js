
let josh = {
    sid: 100080802,
    major: "SDEV",
    creditsCompleted: 30,
    name: "Josh Archer",
    schedule: ["SDEV 117", "SDEV 201", "ENG 101", "CS 121"],
    partTime: false
}

console.log("Your student id is", josh.sid);

if (josh.major === "CS") {
    console.log("Cool!");
} else {
    console.log("Cool as well!");
}

for (const course of josh.schedule) {
    console.log(josh.name, "is taking", course);
}

console.log(josh);

let book = {
    title: "Sunrise on the Reaping",
    author: { 
        fName: "Suzzane", 
        lName: "Collins", 
        books: ["Hunger Games", "Catching Fire", "Mockingjay", "Songbirds and Snakes"]
    },
    pages: 500,
    format: "hardcover",
    genres: ["ya", "dystopian", "drama", "romance", "action"],
    curPage: 0,
    setCurrentPage: function(pageNumber) {
        this.curPage = pageNumber;
    },
    nextPage: function() {
        this.curPage++;
    },
    printBook: function() {
        console.log(`${this.title} by ${this.author}`);
        console.log("*".repeat(20));
        console.log("The author has written", this.author.books.length, "books!")
        console.log(`Pages: ${this.pages}`);
        console.log(`Format: ${this.format}`);
        console.log(`Genres: ${this.genres.length}`);
        console.log("*".repeat(20));
    },
    printGenres: function() {
        console.log("Book genres:");
        for (const genre of this.genres) {
            console.log("Genre", genre);
        }
    }
}

book.setCurrentPage(93);
book.nextPage();
book.nextPage();
console.log(book);
book.printBook();

for (const prop in book) {
    console.log("Book property", prop);
}