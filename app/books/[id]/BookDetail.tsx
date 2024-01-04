import { Book } from "@/lib/features/books/booksSlice";
import { Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";

const IssueDetails = ({ book }: { book: Book }) => {
  return (
    <>
      <Heading>{book.name}</Heading>
      <Grid align="center" columns="2" gap="5" p="3">
        <Flex direction="column">
          <Text size="3" weight="bold">
            Price
          </Text>
          <Text color="gray" size="2">
            {book.price}$
          </Text>
        </Flex>

        <Flex direction="column">
          <Text size="2" weight="bold">
            Category
          </Text>
          <Text color="gray" size="2">
            {book.category}
          </Text>
        </Flex>
      </Grid>
      <Grid align="center" columns="1" gap="5" p="3">
        <Flex direction="column" className="w-100">
          <Text size="2" weight="bold">
            Description
          </Text>
          <Text color="gray" size="2">
            <Card className="prose max-w-full" mt="4">
              {book.description}
            </Card>
          </Text>
        </Flex>
      </Grid>
    </>
  );
};

export default IssueDetails;
