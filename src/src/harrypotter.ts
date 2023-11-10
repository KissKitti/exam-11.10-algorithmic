/* You have a lot of data of writers in the following scheme:

{
  "id": 1,
  "name": "J. K. Rowling",
}
You also have a lot of data of books in the next scheme:

{
  "writerId": 1,
  "title": "Harry Potter and the order of the phoenix",
  "type": "fantasy",
  "numberOfWords": 122350
}
Fill the function (getAmountPublishedInFantasy),
which takes an array with writers and an other array with books and a name. 
The function should return the sum of words in the given writer's "fantasy" 
genre books. */

type Writers = {
    id: number,
    name: string,
}

let writers: Writers[] = [
    {
        "id": 1,
        "name": "J. K. Rowling",
    }
]

type Books = {
    writerId: number,
    title: string,
    type: string,
    numberOfWords: number,
}
let books: Books[] = [
    {
        "writerId": 1,
        "title": "Harry Potter and the order of the phoenix",
        "type": "fantasy",
        "numberOfWords": 122350
    }
]


function getAmountPublishedInFantasy(writers: Writers[], books: Books[], writerName: string) {
    const writer = writers.find(writer => writer.name === writerName);


    while (writer !== undefined) {

        let writerBooks = books.filter(book => book.writerId === writer.id);

        let wordCount = writerBooks.reduce((sum, book) => {
            return book.type === "fantasy" ? sum + book.numberOfWords : sum;
        }, 0);

        return wordCount;
    }

}

let result1 = getAmountPublishedInFantasy(writers, books, "J. K. Rowling")

console.log(result1)


export { }
