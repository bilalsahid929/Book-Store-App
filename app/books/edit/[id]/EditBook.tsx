"use client";
import {
  Book,
  selectBookById,
  updateBook,
} from "@/lib/features/books/booksSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import BookForm from "../../_components/BookForm";

type Props = {
  bookId: string;
};
const EditBook = ({ bookId }: Props) => {
  const book = useAppSelector(selectBookById(bookId));

  const router = useRouter();
  const dispatch = useAppDispatch();
  const addBookToStore = (book: Omit<Book, "id">) => {
    dispatch(updateBook({ id: bookId, updatedBook: book }));
    router.push("/");
  };
  const content = !book ? (
    <h2>Book not found!</h2>
  ) : (
    <BookForm handleFormSubmit={addBookToStore} book={book} />
  );
  return content;
};

export default EditBook;
