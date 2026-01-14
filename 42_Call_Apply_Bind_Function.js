const book = {
  title: "Atomic Habbits",
  author: "J.K Ludhfi",
};

function info(year) {
  console.log(
    `${this.title} was written by ${this.author} and was released in ${year}`
  );
}

const bookInfo = info.bind(book);
info.call(book, "2015");
info.apply(book, ["2015"]);

bookInfo("2015");
