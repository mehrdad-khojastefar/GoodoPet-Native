import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button, Center, HStack, Input, VStack, Image } from 'native-base';
import PageHeader from './PageHeader';
import { login } from '../utills/api';

const LoginPage = () => {

    const googleIcon = require('../assets/googleIcon.svg')
    const linkdinIcon = require('../assets/linkdinIcon.svg')

    const [phoneEmail, setPhoneEmail] = useState("")
    const [password, setPasswordd] = useState("")
    const [value, setValue] = useState("")
    const [changeButton, setChangeButton] = useState(false)


    const Login = () => {
        login(phoneEmail, password).then((res) =>
            console.log(res))
    }

    const handleChangeButton = (e) => {
        setChangeButton(!changeButton)
        setValue('')
    }

    return (
        <VStack>
            <Center>
                <PageHeader />
                <Text style={styles.text}>ورود کاربر سایت</Text>
                <Button mt={'32px'} style={styles.button}>

                    <HStack>
                        <Image mr={'35px'} style={styles.image} source={{ uri: googleIcon }}
                        />
                        <Text style={styles.buttonText} mt={'40px'} mr={'14px'}>ثبت نام در گوگل</Text>

                    </HStack>
                </Button>
                <Button mt={'32px'} style={styles.button}>
                    <HStack  >
                        <Image mr={'19px'} style={styles.image} source={{ uri: linkdinIcon }}
                        />
                        <Text style={styles.buttonText} mt={'10px'} >ثبت نام با لینکدین</Text>
                    </HStack>
                </Button>
                <HStack mt={'32px'}>
                    <Text>─────────</Text>
                    <Text style={styles.buttonText}> یا </Text>
                    <Text>─────────</Text>
                </HStack>
                <Text style={{
                    marginLeft: '98px', marginTop: '14px', fontFamily: 'IranSans',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '13px',
                    lineHeight: '25px'
                }}>برای ورود شماره تلفن همراه خود را وارد کنید:</Text>
                {changeButton == true ?
                    <Input
                        onSubmitEditing={(e) => {
                            setPasswordd(e.target.value),
                                setValue(e.target.value)
                            console.log(e);
                        }}
                        value={value}
                        style={styles.placeholderfont}
                        placeholder='رمز عبور' textAlign={'right'}
                        placeholderTextColor={'#222222'}
                        ml={'48px'} mt={'28px'}
                        borderColor={'#AAAAAA'}
                        width={'291px'} height={'42px'}
                        borderRadius={'7px'}>
                    </Input> : <Input
                        onSubmitEditing={(e) => {
                            setPhoneEmail(e.target.value)
                            console.log(e);
                        }}
                        style={styles.placeholderfont}
                        placeholder='شماره موبایل یا ایمیل' textAlign={'right'}
                        placeholderTextColor={'#222222'}
                        ml={'48px'} mt={'28px'}
                        borderColor={'#AAAAAA'}
                        width={'291px'} height={'42px'}
                        borderRadius={'7px'}>
                    </Input>}

                {changeButton == true ? <Button
                    onPress={Login}
                    style={styles.buttonText}
                    bgColor={'#222222'}
                    width={'291px'} height={'42px'}
                    mt={'42px'} ml={'48px'}
                    borderRadius={'7px'}>ورود</Button>
                    : <Button
                        onPress={handleChangeButton}
                        style={styles.buttonText}
                        bgColor={'#222222'}
                        width={'291px'} height={'42px'}
                        mt={'42px'} ml={'48px'}
                        borderRadius={'7px'}>ادامه</Button>
                }

            </Center>
        </VStack>
    );
};
const styles = StyleSheet.create({
    text: {
        fontFamily: 'IranSans',
        marginTop: '23px',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: '15px',
        lineHeight: '25px',
        width: '103px',
        height: '25px'
    },
    button: {
        backgroundColor: '#D9D9D9',
        width: '188px',
        height: '47px',
        borderRadius: '7px'
    },
    image: {
        width: '28px',
        height: '28px',
        // marginTop: '10px',
        // marginLeft: '19px',

    },
    buttonText: {
        fontFamily: 'IranSans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '17px',
        lineHeight: '25px',
    },
    placeholderfont: {
        fontFamily: 'IranSans',
        fontWeight: '400px',
        fontSize: '13px',
        borderColor: '#aaaaaa'

    }

})

export default LoginPage;