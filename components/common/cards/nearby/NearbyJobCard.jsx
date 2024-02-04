import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './nearbyjobcard.style';


const checkURL = (url) => {
  if(url) return true
  else return false
}

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} 
    onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={{uri: checkURL(job.employer_logo) ? job.employer_logo : 'https://cdn-icons-png.flaticon.com/128/1442/1442886.png' }} resizeMode='contain' style={styles.logoImage}/>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text styles={styles.jobType}>{job.job_employment_type}</Text>

      </View>

    </TouchableOpacity>
  )
}

export default NearbyJobCard