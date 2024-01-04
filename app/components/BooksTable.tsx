import { Book } from "@/lib/features/books/booksSlice";
import { Pencil1Icon, ReaderIcon } from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Button, Link, Table } from "@radix-ui/themes";
import DeleteBookButton from "./DeleteBookButton";

interface Props {
  books: Book[];
}

const BooksTable = ({ books }: Props) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell
              key={column.value}
              className={column.className || ""}
            >
              {column.label}
            </Table.ColumnHeaderCell>
          ))}
          <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {books.map((book) => (
          <Table.Row key={book.id}>
            <Table.Cell>
              <Tooltip.Provider delayDuration={10}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <Link href={`/books/${book.id}`}>
                      <>
                        <ReaderIcon className=" inline" />
                        {book.name}
                      </>
                    </Link>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="TooltipContent  text-gray-950  bg-neutral-200 p-2 shadow-sm"
                      sideOffset={5}
                    >
                      View book details
                      <Tooltip.Arrow className="TooltipArrow" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
              <div className="block ">
                {book.description.substring(0, 50)}...
              </div>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {book.price}$
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {book.category}
            </Table.Cell>
            <Table.Cell>
              <DeleteBookButton bookId={book.id} />
              <Button className=" text-white ms-3">
                <Pencil1Icon className="inline" />
                <Link href={`/books/edit/${book.id}`} className=" !text-white">
                  Edit
                </Link>
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
const columns: { label: string; value: keyof Book; className?: string }[] = [
  { label: "Name", value: "name" },
  { label: "Price", value: "price", className: "hidden md:table-cell" },
  { label: "Category", value: "category", className: "hidden md:table-cell" },
];

export const columnNames = columns.map((column) => column.value);

export default BooksTable;
