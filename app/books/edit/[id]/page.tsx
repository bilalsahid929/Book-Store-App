import { Box, Grid } from "@radix-ui/themes";
import Link from "next/link";
import EditBook from "./EditBook";

interface Props {
  params: { id: string };
}
const Page = ({ params }: Props) => {
  return (
    <div>
      <Grid columns={{ initial: "1", sm: "5" }} gap="5">
        <Link href={`/`}>Go To Book List</Link>
        <Box className="md:col-span-4">
          <EditBook bookId={params.id} />
        </Box>
      </Grid>
    </div>
  );
};

export default Page;
export const dynamic = "force-dynamic";
