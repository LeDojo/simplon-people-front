import { Button, Flex, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex direction="column" align="center" justify={"center"} h={"100vh"}>
      <Heading as="h1" mb={4}>
        Bienvenue sur notre plateforme de financement participatif!
      </Heading>
      <Text mb={8}>Decouvrez nos catégories de projets:</Text>
      <Button colorScheme="teal">Catégorie 1</Button>
      <Button colorScheme="teal" ml={4}>
        Catégorie 2
      </Button>
    </Flex>
  );
};

export default Home;
