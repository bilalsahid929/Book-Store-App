"use client";
import { useRouter } from "next/navigation";
import { Book, addBook } from "@/lib/features/books/booksSlice";
import { useAppDispatch } from "@/lib/hooks";
import BookForm from "../_components/BookForm";

const AddNewBook = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const addBookToStore = (book: Omit<Book, "id">) => {
    dispatch(addBook(book));
    router.push("/");
  };
  return <BookForm handleFormSubmit={addBookToStore} />;
};

export default AddNewBook;
