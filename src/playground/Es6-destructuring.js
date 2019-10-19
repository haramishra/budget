const book = {
    title: "Ego is the Enemy",
    author: "Rayn Holiday",
    publisher: {
        name: "Penguin"
    }
};

const { name: publisherName = "Self Published" } = book.publisher;

console.log(publisherName);

const address = ["Ameerpet", "Hyderabad", "Talangana"];

const [area, city, state] = address;

console.log(area, city, state);