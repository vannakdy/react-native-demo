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
import axios from 'axios';
const App = () => {
    const [list,setList] = useState([]);
    const [visible,setViisble] = useState(false);

    useEffect(()=>{
        getList()
    },[])

    const getList= () => {
        axios({
            url:"https://nitc.cleverapps.io/api/courses",
            method : "GET"
        }).then((res)=>{
            var response = res.data;
            setList(response.data)
        })
    }
    const handelDetete = (item) =>{
        axios({
            url:"https://nitc.cleverapps.io/api/courses/"+item.course_id,
            method : "DELETE"
        }).then((res)=>{
            var response = res.data;
            getList();
        })
    }

    const handleEdit = (item) => {

    }

    const handleVisibleModal = () => {
        setViisble(!visible)
    }

    return (
        <SafeAreaView>
            <View style={styles.header_container}>
                <Text style={styles.txt_main}>Course {list.length}</Text>
                <TouchableOpacity
                    onPress={handleVisibleModal}

                >
                    <Text style={styles.txt_name}>New Course</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                visible={visible}
            >
                <SafeAreaView>
                <View style={styles.form}>
                    <TouchableOpacity
                        onPress={handleVisibleModal}
                    >
                        <Text style={styles.txtClose}>
                            Close
                        </Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.text_input}
                        placeholder="Course Name"
                    />
                    <TextInput
                        style={styles.text_input}
                        placeholder="Course price"
                    />
                    <TextInput
                        style={styles.text_input}
                        placeholder="Description"
                    />
                    <TextInput
                        style={styles.text_input}
                        placeholder="Status"
                    />
                    <TouchableOpacity
                        onPress={handleVisibleModal}
                        style={styles.btnContainer}
                    >
                        <Text style={styles.textButton}>
                            Save New
                        </Text>
                    </TouchableOpacity>
                </View>
                </SafeAreaView>
            </Modal>
            <ScrollView>
                {list.map((item,index)=>{
                    return(
                        <View style={styles.item_course} key={index}>
                            <View>
                                <Text style={styles.txt_name}>{index+1}. {item.name}</Text>
                                <Text style={styles.txt_item}>{item.price}</Text>
                                <Text style={styles.txt_item}>{item.description}</Text>
                                <Text style={item.status === 1 ? styles.txt_enabled : styles.txt_disabled}>{item.status === 1 ? "Enabled" : "Disabled"}</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={()=>handelDetete(item)}
                                >
                                    <Text style={styles.txt_del}>Delete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={()=>handleEdit(item)}
                                >
                                    <Text style={styles.txt_edit}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
   
    form:{
        padding : 15,
        // backgroundColor : "#e3e3e3",
        marginTop:10
    },
   
    txtClose:{
        fontSize:18,
        fontWeight : "bold",
        marginVertical : 10,
        textAlign : "right"
    },
    text_input:{
        padding :10,
        borderWidth :1,
        borderColor : "gray",
        borderRadius : 10,
        marginTop :10
    },
    header_container : {
        padding : 15,
        backgroundColor : "#eeeeee",
        flexDirection:"row",
        justifyContent : "space-between"
    },
    txt_main : {
        fontSize : 22,
        fontWeight : "bold"
    },
    item_course : {
        padding :15,
        borderBottomWidth: 1,
        borderBottomColor : "#e2e2e2",
        flexDirection : "row",
        justifyContent:"space-between"
    },
    txt_name : {
        fontSize : 18,
        marginTop : 5,
        fontWeight : "bold"
    },
    txt_item : {
        fontSize : 14,
        marginTop : 5
    },
    txt_enabled : {
        fontSize : 14,
        marginTop : 5,
        color:"green",
        fontWeight : "bold"
    },
    txt_disabled : {
        fontSize : 14,
        marginTop : 5,
        color:"yellow",
        fontWeight : "bold"
    },
    txt_del:{
        fontSize : 14,
        marginTop : 5,
        color:"red",
        fontWeight : "bold"
    },
    txt_edit:{
        fontSize : 14,
        marginTop : 5,
        color:"blue",
        fontWeight : "bold"
    },
    btnContainer : {
        display : 'flex',
        padding :20,
        backgroundColor : "#000",
        marginTop : 20,
        
    },
    textButton : {
        textAlign : "center",
        color : "#FFF"
    },
})

