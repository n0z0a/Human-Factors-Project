import { Stack, useRouter } from 'expo-router'
import { Modal, Pressable, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { dummyProfile } from 'utils/dummyData'
import ProfileCard from 'components/ui/ProfileCard'
import colors from 'utils/colors'
import Text from 'components/ui/Text'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useState } from 'react'
import AppFeedbackForm from 'components/forms/AppFeedbackForm'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    rowGap: 12,
  },
})

const ReviewButton = ({ showReviewForm, setShowReviewForm }) => (
  <Pressable onPress={() => setShowReviewForm(true)} style={{ marginRight: 10 }}>
    <FontAwesomeIcon icon="star" size={25} color={colors.text} />
  </Pressable>
)

const ProfileScreen = () => {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const router = useRouter()

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => <ReviewButton showReviewForm={showReviewForm} setShowReviewForm={setShowReviewForm} />,
        }}
      />
      <SafeAreaView style={styles.container}>
        <Modal
          animationType="fade"
          visible={showReviewForm}
          onRequestClose={() => setShowReviewForm(false)}
          transparent>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(200, 200, 200, 0.7)',
            }}>
            <AppFeedbackForm />
          </View>
        </Modal>
        <ProfileCard
          icon={dummyProfile.icon}
          personalInfo={dummyProfile.personalInfo}
          gameInfo={dummyProfile.gameInfo}
        />
        <Text.Button title="Settings" onPress={() => router.replace('/profile/settings')} />
      </SafeAreaView>
    </>
  )
}

export default ProfileScreen
