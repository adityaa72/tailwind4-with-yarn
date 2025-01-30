import { Button, Text } from "@jamsr-ui/react";

const Page = () => {
  return (
    <div>
      <h1 className="text-3xl">Hello World</h1>
      <Button color="primary">Hello</Button>
      <Text as="h1" variant="h1">
        Hello World!
      </Text>
    </div>
  );
};

export default Page;
