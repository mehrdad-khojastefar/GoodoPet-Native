import { StyleSheet } from 'react-native';
import { Box, HStack, Image, Icon, Center, Input, VStack } from 'native-base';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons, Entypo } from '@expo/vector-icons';


const PageHeader = () => {

    const headerIcon = require("../assets/image//headerIcon.svg")


    return (
        <VStack>
            <Center>
                <Box style={styles.headercontainer}>
                    <HStack>
                        <Icon as={Entypo} name="menu" mt={'10px'} ml={'22px'} size="lg" height={'28px'} width={'28px'} color={'#fff'} />
                        <Image width={'92px'} height={'21px'} ml={'86px'} mr={'134px'} mt={'12px'} mb={'12px'} source={{ uri: headerIcon }} />
                    </HStack>
                </Box>
                <Box style={styles.searchcontainer}>
                    <Input
                        style={styles.placeholderfont}
                        borderRadius={'7px'}
                        placeholder={' ...جستجو خدمات و محصولات پت '} placeholderTextColor={'#222222'}
                        InputLeftElement={<Icon as={AntDesign} name="search1" ml={'9px'} size="md" height={'20px'} width={'20px'} color={'#000'} />}
                        textAlign={'right'}
                        width={'317px'} height={'34px'}
                        ml={'22px'} mr={'21px'} mt={'6px'}
                        bgColor={'#fff'}
                        overflow={'hidden'}></Input>
                    <Input
                        style={styles.placeholderfont}
                        borderRadius={'7px'}
                        placeholder=' تهران' placeholderTextColor={'#222222'}
                        InputLeftElement={<Icon as={Ionicons} name="location-outline" ml={'9px'} size="md" height={'20px'} width={'20px'} color={'#000'} />}
                        textAlign={'right'}
                        width={'317px'} height={'34px'}
                        ml={'22px'} mr={'21px'} mt={'5px'} bgColor={'#fff'}
                        overflow={'hidden'}>

                    </Input>
                </Box>
            </Center >
        </VStack>

    );
};

export default PageHeader;

const styles = StyleSheet.create({
    headercontainer: {
        width: '360px',
        height: '45px',
        backgroundColor: '#FF6600'
    },
    searchcontainer: {
        width: '360px',
        height: '90px',
        backgroundColor: '#FF6600',
        marginTop: '3px'
    },
    placeholderfont: {
        fontFamily: 'IRANSansMobile',
        fontWeight: '400px',
        fontSize: '13px'
    }


})