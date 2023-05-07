import { Box, Flex, Heading, Img, SimpleGrid, Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import verify from '../images/verify.gif'
import User from '../images/user.gif'
const UsersDashboard = ({ usersData }) => {
  return (
    <Box textAlign={"center"} p="6">
      <Heading as="h1" mb="6">
        Users Dashboard
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing="6">
        <Stat>
          <StatLabel>Total Users</StatLabel>
          <StatNumber>{usersData.length}</StatNumber>
          <Text fontSize="sm">Number of registered users</Text>
        </Stat>
        <Stat>
          <StatLabel>Active Users</StatLabel>
          <StatNumber>{usersData.filter(user => user.maritalstatus).length}</StatNumber>
          <Text fontSize="sm">Number of active users</Text>
        </Stat>
        <Stat>
          <StatLabel>Inactive Users</StatLabel>
          <StatNumber>{usersData.filter(user => !user.isActive).length}</StatNumber>
          <Text fontSize="sm">Number of inactive users</Text>
        </Stat>
      </SimpleGrid>
      <Flex mt="6" flexDirection={{ base: "column", md: "row" }}>
        <Box flex="1" bg="white" p="6" borderRadius="md" boxShadow="md">
          <Heading color={"black"} as="h2" size="md" mb="6">
            All users
          </Heading>
          <SimpleGrid columns={1} spacing={4}>
            {usersData.slice(0, 50).map(user => (
             <div key={user.id} style={{display:"flex"}}>
               <Img width={"100px"} height={'100px'} src={verify}></Img>
              <Box w={"80%"} bg={"gray.100"} key={user.id}  p="4" borderRadius="md">
                <Text fontSize={"2xl"} fontWeight="bold">Name :  {user.firstname} {user.lastname}</Text>
                <Text  fontSize="sm">Email : {user.email}</Text>
                <Text  fontSize="sm" fontWeight="bold">
                  Gender : {user.gender}
                </Text>
                <Text  fontSize="sm" fontWeight="bold">
                  Age : {user.age}
                </Text>
                <Text  fontSize="sm" fontWeight="bold">
                  MaritalStatus : {user.maritalstatus}
                </Text>
              </Box>
              </div>
            ))}
          </SimpleGrid>
        </Box>
        <Box flex="1" bg="white" p="6" borderRadius="md" ml={{ base: 0, md: "6" }} mt={{ base: "6", md: 0 }} boxShadow="md">
          <Heading color={"black"} as="h2" size="md" mb="6">
            Users by Age
          </Heading>
          <SimpleGrid columns={1} spacing={4}>
            {Object.entries(
              usersData.reduce((accumulator, user) => {
                accumulator[user.age] = (accumulator[user.age] || 0) + 1;
                return accumulator;
              }, {})
            ).map(([age, count]) => (
              <Box key={age} bg="gray.100" p="4" borderRadius="md">
                <Text fontSize="lg" fontWeight="bold">Age : {age}</Text>
                <Text fontSize="lg"><img width="50px" height="50px" src={User} alt="" />{count} users</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default UsersDashboard;