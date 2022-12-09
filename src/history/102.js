import React, { useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView,
    RefreshControl
} from 'react-native';

const App = () => {
    const [list,setList] = React.useState([]);
    useEffect(()=>{
        getListStudent();
    },[]);

    const getListStudent = () => {
        fetch("https://nitc.cleverapps.io/api/student",{
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        }).then(res=>{
            return res.json()
        }).then(res=>{
            var list = (res.list_student)
            setList(list)
        }).catch(err=>{
            alert(err)
        })
    }

    return (
        <SafeAreaView
            style={{backgroundColor:'#4ca832',flex:1}}
        >
            <View style={{backgroundColor:'white'}}>
            <View style={styles.headers}>
                <Text style={styles.txtHeader}>HOME</Text>
            </View>
            <Text style={styles.txtStudent}>List Student</Text>
            <ScrollView
               contentContainerStyle={{flexGrow:1}}
               refreshControl={
                <RefreshControl
                    refreshing={false}
                />
               } 
            >
                <View style={{padding:20}}>
                    {list.map((item,index)=>{
                        return (
                            <View style={styles.listItem} key={index}>
                                <View style={styles.icon}/>
                                <View style={{paddingLeft : 15}}>
                                    <Text style={{fontSize : 16,fontWeight : 'bold'}}>{item.fname.toUpperCase()}-{item.lastname.toUpperCase()}</Text>
                                    <Text>{item.gender == 1 ? "Male" : "Female"}</Text>
                                    <Text>{"0968899000"}</Text>
                                    <Text>{"dara1999@gmail.com"}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({

    headers : {
        padding : 20,
        backgroundColor : "#4ca832"
    },
    txtHeader : {
        fontSize : 22,
        fontWeight : '700',
    },
    listItem : {
        paddingVertical : 15,
        borderBottomColor : "#e2e2e2",
        borderBottomWidth : 0.5,
        flexDirection : 'row'
    },
    txtStudent : {
        paddingTop : 20,
        paddingBottom : 10,
        fontSize : 20,
        fontWeight : '700',
        paddingLeft : 20
    },
    icon:{
        width : 90,
        height : 90,
        backgroundColor : '#e4e4e4',
        borderRadius : 100
    }
})

