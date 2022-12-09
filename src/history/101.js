import React, {useState} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

const App = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const  handleLogin = () => {
        alert(username +" "+password)
    }
    const  handleChangeUsername = (text) => {
        setUsername(text)
    }
    const handleChangePassword = (text) => {
        setPassword(text)
    }
    return (
        <SafeAreaView>
            <View style={{padding:20}}>
               <Text style={styles.txt_title}>Login</Text>
                {/* <TextInput
                    onChangeText={handleChangeUsername}
                    placeholder='Username'
                    style={styles.input_container}
                />
                <TextInput
                    secureTextEntry={true}
                    onChangeText={handleChangePassword}
                    placeholder='Password'
                    style={styles.input_container}
                />
                <Text style={styles.txt_forget}>Forget password</Text>
                
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.btn_login}
                >
                    <Text style={styles.txt_login}>Login</Text>
                </TouchableOpacity> */}

            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    txt_title:{
        marginTop:100,
        fontSize:45,
        color:"#000",
        fontWeight:"bold"
    },
    input_container:{
        borderWidth:0.5,
        padding:15,
        fontSize:16,
        marginTop:20,
        borderRadius:50
    },  
    txt_forget:{
        marginTop:10,
        textAlign:"right",
        fontSize:16,
        color:'blue'
    },
    btn_login:{
        backgroundColor:'#000000',
        padding:15,
        marginTop:20,
        borderRadius:10
    },
    txt_login:{
        color:"#FFFFFF",
        fontSize:18,
        fontWeight:'bold',
        textAlign:"center"
    }

    
})

