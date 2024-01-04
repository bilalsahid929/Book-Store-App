import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface Book {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
}

interface BooksState {
  bookList: Book[];
}

const initialState: BooksState = {
  bookList: [
    {
      id: nanoid(),
      name: "The Great Gatsby",
      price: 12.99,
      category: "Fiction",
      description:
        "A classic novel by F. Scott Fitzgerald. Set in the Jazz Age, it explores themes of decadence, idealism, and the American Dream.",
    },
    {
      id: nanoid(),
      name: "To Kill a Mockingbird",
      price: 15.99,
      category: "Fiction",
      description:
        "A masterpiece by Harper Lee, addressing racial injustice in the American South during the Great Depression.",
    },
    {
      id: nanoid(),
      name: "1984",
      price: 10.99,
      category: "Dystopian",
      description:
        "George Orwell's influential novel depicting a dystopian society under the omnipresent surveillance of Big Brother.",
    },
    {
      id: nanoid(),
      name: "The Catcher in the Rye",
      price: 14.99,
      category: "Fiction",
      description:
        "J.D. Salinger's classic about teenage rebellion and identity, told through the voice of the cynical Holden Caulfield.",
    },
    {
      id: nanoid(),
      name: "The Hobbit",
      price: 18.99,
      category: "Fantasy",
      description:
        "J.R.R. Tolkien's adventure novel follows Bilbo Baggins on a quest to reclaim a dragon-guarded treasure in the Lonely Mountain.",
    },
    {
      id: nanoid(),
      name: "The Alchemist",
      price: 9.99,
      category: "Philosophical Fiction",
      description:
        "Paulo Coelho's allegorical novel about Santiago, a shepherd boy, and his journey to find his personal legend and destiny.",
    },
    {
      id: nanoid(),
      name: "Sapiens: A Brief History of Humankind",
      price: 20.99,
      category: "Non-Fiction",
      description:
        "Yuval Noah Harari's exploration of human history, from the emergence of Homo sapiens to the present day.",
    },
    {
      id: nanoid(),
      name: "The Girl with the Dragon Tattoo",
      price: 16.99,
      category: "Mystery",
      description:
        "Stieg Larsson's gripping mystery novel follows investigative journalist Mikael Blomkvist and hacker Lisbeth Salander.",
    },
    {
      id: nanoid(),
      name: "The Road",
      price: 13.99,
      category: "Post-Apocalyptic",
      description:
        "Cormac McCarthy's novel tells the story of a father and son's journey through a post-apocalyptic landscape, facing hardships and survival challenges.",
    },
    {
      id: nanoid(),
      name: "Pride and Prejudice",
      price: 11.99,
      category: "Classic",
      description:
        "Jane Austen's classic novel of manners and love, following the life and relationships of Elizabeth Bennet in Regency-era England.",
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Omit<Book, "id">>) => {
      const newBook: Book = {
        ...action.payload,
        id: nanoid(),
      };
      state.bookList.push(newBook);
    },
    updateBook: (
      state,
      action: PayloadAction<{ id: string; updatedBook: Omit<Book, "id"> }>
    ) => {
      const { id, updatedBook } = action.payload;
      const existingBook = state.bookList.find((book) => book.id === id);
      if (existingBook) {
        Object.assign(existingBook, updatedBook);
      }
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.bookList = state.bookList.filter((book) => book.id !== id);
    },
  },
});

export const { addBook, updateBook, deleteBook } = booksSlice.actions;

export const selectBookList = (state: { books: BooksState }) =>
  state.books.bookList;

export const selectBookById = (id: string) => (state: { books: BooksState }) =>
  state.books.bookList.find((book) => book.id === id);

export default booksSlice.reducer;
