import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";
import BooksList from "./BooksList";

export default async function Home() {
  return (
    <Grid columns={{ initial: "1" }} gap="5">
      <Flex direction="column" gap="5">
        <BooksList />
      </Flex>
    </Grid>
  );
}

// export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Book Store App",
  description: "View a information related to listed books",
};
