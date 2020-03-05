import React, {useState} from "react"
import {
    Dimensions,
    FlatList,
    Image,
    Modal,
    StatusBar,
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Linking
} from "react-native";
import Constants from "expo-constants";
import {Icon} from 'react-native-elements'
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ImageScreen from "./ImageScreen";
import ProfileScreen from "./ProfileScreen";

const dimensions = Dimensions.get('window');
const coverHeight = Math.round(dimensions.width * 7 / 10);
const coverWidth = dimensions.width;

function Profile() {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [facebook, setFacebook] = useState('')
    const onPressPhone = (phone) => {
        Linking.openURL(`tel://${phone}`).catch(err => console.log('Error:', err))

    }
    const onPressEmail = (email) => {
        Linking.openURL(`mailto:${email}`).catch(err => console.log('Error:', err))

    }
    const onPressFacebook = (facebook) => {
        Linking.openURL(`fb://profile/${facebook}`).catch(err => console.log('Error:', err))

    }
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        {key: 'first', title: 'Image'},
        {key: 'second', title: 'Profile'},
    ])
    const renderScene = SceneMap({
        first: ImageScreen,
        second: ProfileScreen,
    });
    const initialLayout = {width: Dimensions.get('window').width};
    const getTabBarIcon = (props) => {
        const {route} = props
        if (route.key === 'first') {
            return <Icon name='image' size={30} color={'white'}/>

        } else {
            return <Icon type="antdesign"
                         name="profile" size={30} color={'white'}/>
        }
    }
    const renderTabBar = props => (

        <TabBar
            {...props}
            indicatorStyle={{backgroundColor: 'white'}}
            style={{backgroundColor: '#ffd800'}}
            renderIcon={props => getTabBarIcon(props)}
        />
    );
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        console.log("chao cac ban")
                    }}
                >
                    {
                        <Image style={{height: coverHeight, width: coverWidth, resizeMode: 'cover'}}
                               source={{uri: "https://firebasestorage.googleapis.com/v0/b/beemoapp-2619e.appspot.com/o/Beemo%2FLeague-of-Legends-Teemo-beemo-1319969-wallhere.com.jpg?alt=media&token=64027069-e671-4586-9944-c525e7838055" || null}}/>
                    }
                </TouchableOpacity>

            </View>
            <View style={styles.boxEvent}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        console.log("chao cac ban")
                    }}
                    style={styles.avata}
                >
                    {
                        <Image style={styles.imageAvatar}
                               source={{uri: "https://firebasestorage.googleapis.com/v0/b/beemoapp-2619e.appspot.com/o/Beemo%2FLeague-of-Legends-Teemo-beemo-1319969-wallhere.com.jpg?alt=media&token=64027069-e671-4586-9944-c525e7838055" || null}}
                        />
                    }
                </TouchableOpacity>
                <Text style={styles.name}>Lê Ngọc Huy</Text>
                <Text style={styles.nickName}>(Captain Beemo)</Text>
                <View style={styles.socialRow}>
                    <View>
                        <Icon
                            size={40}
                            type="entypo"
                            color="#3B5A98"
                            name="facebook-with-circle"
                            onPress={() => {
                                setFacebook('huy1407')
                                onPressFacebook(facebook)
                            }}
                        />
                    </View>
                    <View style={styles.socialIcon}>
                        <Icon
                            size={40}
                            name='phone'
                            type='font-awesome'
                            color='#517fa4'
                            onPress={() => {
                                setPhone('0366717837')
                                onPressPhone(phone)
                            }}
                        />
                    </View>
                    <View>
                        <Icon
                            size={40}
                            type="fontisto"
                            color="#DD4C39"
                            name="email"
                            onPress={() => {
                                setEmail('huy14071999@gmail.com')
                                onPressEmail(email)
                            }}
                        />
                    </View>
                </View>

            </View>
            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        marginTop: Constants.statusBarHeight,

    },
    imageAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#ebeaea',
    },
    box1: {
        flexDirection: 'column',
        position: 'relative'
    },
    boxEvent: {
        margin: 'auto',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingTop: 50,
        paddingBottom: 40,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -80,
        width: '100%',
    },
    avata: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 0,
        left: '50%',
        marginLeft: -50,
        marginTop: -55,

    },
    name: {
        textAlign: 'center',
        color: '#ffd800',
        fontSize: 20

    },
    nickName: {
        textAlign: 'center',
        color: 'rgba(171,174,148,0.42)',
        fontSize: 20

    },
    socialIcon: {
        marginLeft: 14,
        marginRight: 14,
    },
    socialRow: {
        flexDirection: 'row',
        paddingTop: 10
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default Profile