"use client";
import { Spinner } from "@/app/components";
import { deleteBook as deleteBookAction } from "@/lib/features/books/booksSlice";
import { useAppDispatch, useAppStore } from "@/lib/hooks";
import { TrashIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteBookButton = ({ bookId }: { bookId: string }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const store = useAppStore();
  const dispatch = useAppDispatch();
  const deleteBook = () => {
    try {
      setDeleting(true);
      dispatch(deleteBookAction(bookId));
      setDeleting(false);
    } catch (error) {
      setDeleting(false);
      setError(true);
    }
  };
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger className="red-btn-container-custom">
          <Button color="red" disabled={isDeleting} className="red-btn-custom">
            <TrashIcon className="inline" /> Delete Book{" "}
            {isDeleting && <Spinner />}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this Book? This action cannot be
            undone.
          </AlertDialog.Description>
          <Flex mt="4" gap="3">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action className="red-btn-container-custom">
              <Button
                color="red"
                onClick={deleteBook}
                className="red-btn-custom"
              >
                Delete Book
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This Book could not be deleted.
          </AlertDialog.Description>
          <Button
            onClick={() => setError(false)}
            color="gray"
            variant="soft"
            mt="2"
          >
            OK
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteBookButton;
