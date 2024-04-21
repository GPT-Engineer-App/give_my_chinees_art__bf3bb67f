import React from "react";
import { Box, Button, Center, Container, Heading, Image, Stack, Text, useColorModeValue, VStack, Badge, Link } from "@chakra-ui/react";
import { FaRocket, FaTwitter, FaDiscord, FaTelegramPlane } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("red.500", "red.900");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} as={Stack} align="stretch">
        {/* Hero Section */}
        <Box bg={bg} p={8} borderRadius="lg">
          <Center flexDirection="column">
            <Heading as="h1" size="2xl" mb={4}>
              DumplingCoin
            </Heading>
            <Text fontSize="xl" color={color}>
              The tastiest meme coin on the blockchain!
            </Text>
            <Image src="https://images.unsplash.com/photo-1526401485004-b7f8f8df0f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwYXJ0fGVufDB8fHx8MTcwNDQ2MjQwOXx8&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" alt="Chinese Art" my={5} />
            <Button leftIcon={<FaRocket />} colorScheme="purple" size="lg" mt={3}>
              Launch App
            </Button>
          </Center>
        </Box>

        {/* About Section */}
        <Box bg={bg} p={8} borderRadius="lg">
          <VStack align="start" spacing={3}>
            <Heading as="h2" size="xl">
              About DumplingCoin
            </Heading>
            <Text fontSize="md" color={color}>
              DumplingCoin is the latest meme sensation taking the crypto world by storm. Inspired by the love for dumplings, this coin brings together foodies and crypto enthusiasts alike. Join us on a savory journey to the moon!
            </Text>
          </VStack>
        </Box>

        {/* Features Section */}
        <Box bg={bg} p={8} borderRadius="lg">
          <Heading as="h3" size="lg" mb={4}>
            Why DumplingCoin?
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Badge colorScheme="green" p={2}>
              Community Driven
            </Badge>
            <Badge colorScheme="blue" p={2}>
              Decentralized
            </Badge>
            <Badge colorScheme="red" p={2}>
              Yummy Rewards
            </Badge>
          </Stack>
        </Box>

        {/* Social Links Section */}
        <Box bg={bg} p={8} borderRadius="lg">
          <Heading as="h4" size="md" mb={4}>
            Join the Community
          </Heading>
          <Stack direction="row" spacing={6}>
            <Link href="https://twitter.com/DumplingCoin" isExternal>
              <Button leftIcon={<FaTwitter />} colorScheme="twitter" variant="outline">
                Twitter
              </Button>
            </Link>
            <Link href="https://t.me/DumplingCoin" isExternal>
              <Button leftIcon={<FaTelegramPlane />} colorScheme="telegram" variant="outline">
                Telegram
              </Button>
            </Link>
            <Link href="https://discord.gg/DumplingCoin" isExternal>
              <Button leftIcon={<FaDiscord />} colorScheme="purple" variant="outline">
                Discord
              </Button>
            </Link>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
