"use client";
import { selectBookById } from "@/lib/features/books/booksSlice";
import { useAppSelector } from "@/lib/hooks";
import { Box, Grid } from "@radix-ui/themes";
import Link from "next/link";
import BookDetail from "./BookDetail";
interface Props {
  params: { id: string };
}
const Page = ({ params }: Props) => {
  const book = useAppSelector(selectBookById(params.id!));

  const content = !book ? <h2>Book not found!</h2> : <BookDetail book={book} />;

  return (
    <div>
      <Grid columns={{ initial: "1", sm: "5" }} gap="5">
        <Link href={`/`}>Go To Book List</Link>
        <Box className="md:col-span-4">{content}</Box>
      </Grid>
    </div>
  );
};

export default Page;
