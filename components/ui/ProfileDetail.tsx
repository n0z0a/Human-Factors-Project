import { StyleSheet, View } from 'react-native'
import Text from 'components/ui/Text'

type ProfileDetailProps = {
  type: string
  align?: 'left' | 'center' | 'right'
  children: React.ReactNode
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightAlign: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
})

const ProfileDetail = ({ type, align = 'left', children }: ProfileDetailProps) => {
  return (
    <View style={[align === 'center' && styles.centerAlign, align === 'right' && styles.rightAlign]}>
      <Text style={styles.text}>{type}</Text>
      {children}
    </View>
  )
}

export default ProfileDetail
