import { View, Text, Image } from 'react-native';
import {icons} from '../../../constants';
import styles from './company.style';
import { checkImageURL } from '../../../utils';

const Company = ({companyLogo, jobTitle, companyName, location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={{ uri: checkImageURL(companyLogo) ? companyLogo : 'https://cdn-icons-png.flaticon.com/128/1442/1442886.png' }} style={{ width: "80%", height: "80%" }} resizeMode='contain'/>
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
        <View style={styles.locationBox}>
          <Image source={icons.location} resizeMode='contain' style={styles.locationImage}/>
          
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company