import { Pressable, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import ProfileCard from 'components/ui/ProfileCard'
import Text from 'components/ui/Text'
import colors from 'utils/colors'
import { dummyCandidatePool } from 'utils/dummyData'
import Lightbox from 'components/ui/Lightbox'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 12,
  },
  lightboxContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 10,
  },
  lightboxText: {
    fontFamily: 'Inter-Thin',
    fontSize: 24,
    color: 'white',
  },
})

const FeedScreen = () => {
  const [users, setUsers] = useState(dummyCandidatePool)
  const [userIndex, setUserIndex] = useState(0)
  const [showMatchLightbox, setMatchLightbox] = useState(false)
  const [showSendOffLightbox, setSendOffLightbox] = useState(false)

  const nextUser = () => setUserIndex((userIndex + 1) % users.length)
  const openMatchLightbox = () => setMatchLightbox(true)
  const openSendOffLightbox = () => {
    setSendOffLightbox(true)
    setTimeout(() => {
      setSendOffLightbox(false)
      nextUser()
    }, 3000)
  }
  const closeMatchLightbox = () => {
    setMatchLightbox(false)
    openSendOffLightbox()
  }

  const handleLike = () => {
    console.log(`liked ${users[userIndex].userId}`)
    openMatchLightbox()
  }

  const currentUser = users[userIndex]

  if (!currentUser) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <Lightbox visible={showMatchLightbox} onRequestClose={closeMatchLightbox}>
        <View style={styles.lightboxContentContainer}>
          <Text style={[styles.lightboxText, { fontWeight: 'bold' }]}>{`IT'S A MATCH!`}</Text>
          <Text style={styles.lightboxText}>{`Grab ${currentUser.profile.personalInfo.name}'s Discord username:`}</Text>
          <Pressable>
            <Text style={styles.lightboxText}>{currentUser.userId}</Text>
          </Pressable>
          <Pressable onPress={closeMatchLightbox}>
            <Text style={{ color: 'white' }}>Dismiss</Text>
          </Pressable>
        </View>
      </Lightbox>

      <Lightbox visible={showSendOffLightbox} onRequestClose={() => setSendOffLightbox(false)}>
        <Text style={styles.lightboxText}>GLHF</Text>
      </Lightbox>
      <View>
        <ProfileCard
          icon={currentUser.profile.icon}
          personalInfo={currentUser.profile.personalInfo}
          gameInfo={currentUser.profile.gameInfo}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text.Button title="Dislike" style={{ backgroundColor: 'white', color: 'black' }} onPress={nextUser} />
        <Text.Button title="Like" onPress={handleLike} />
      </View>
    </SafeAreaView>
  )
}

export default FeedScreen
