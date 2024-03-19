import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex p={4} bg={"teal.500"} color="white">
      <Link to="/">
        <Heading size={"md"}>Mon App</Heading>
      </Link>
      <Spacer />
      <Link to="/">Home</Link>
      <Link to="/about">A Propos</Link>
      <IconButton
        aria-label=" Toggle Dark Mode"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
}

export default Navbar;
