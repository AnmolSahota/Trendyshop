import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Stack, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

function Theme() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
                <Button bg={"none"} onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Stack>
        </Flex>
    )
}

export default Theme