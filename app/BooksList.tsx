"use client";
import { selectBookList } from "@/lib/features/books/booksSlice";
import { useAppSelector } from "@/lib/hooks";
import { BooksTable } from "./components";

const BooksList = () => {
  const books = useAppSelector(selectBookList);
  const content = books.length ? (
    <BooksTable books={books} />
  ) : (
    <h4>The books list is empty</h4>
  );
  return <section>{content}</section>;
};

export default BooksList;
