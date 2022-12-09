import React , {useEffect, useState} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Modal
} from "react-native";
const App = () => {

    const [list,setList] = useState([]);

    useEffect(()=>{
        getListTeacher();
    },[])

    const getListTeacher = () => {
        fetch("https://nodejs-course-g2.vercel.app/api/teacher",{
            method : "GET",
            headers : {
            //     Accept: 'application/json',
            //    'Content-Type': 'application/json',
            }
        }).then(res=>{
            return res.json();
        }).then(res=>{
            console.log(res)
            setList(res.list)
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.txtMain}>List teacher {list.length}</Text>
                {list.map((item,index)=>{
                    return (
                        <View key={index} style={styles.row}>
                            <Text>{item.firstname}-{item.lastname}</Text>
                            <Text>{item.gender == 1 ? "Male" : "Female"}</Text>
                            <Text>{item.tel}</Text>
                            <Text>{item.email}</Text>
                            <Text>{item.description}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    row : {
        marginTop : 10,
        paddingHorizontal : 20
    },
    txtMain:{
        fontSize :20,
        fontWeight : "bold",
        paddingHorizontal : 20,
        marginBottom : 10
    }
})


