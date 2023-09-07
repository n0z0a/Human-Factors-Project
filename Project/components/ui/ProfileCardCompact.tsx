import { View, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'
import * as Clipboard from 'expo-clipboard'
import * as Haptics from 'expo-haptics'
import Icon from 'components/ui/Icon'
import Text from 'components/ui/Text'
import ProfileDetail from 'components/ui/ProfileDetail'
import Availability from 'components/ui/Availability'
import colors from 'utils/colors'
import { communicationMethodIcon, languageIcon, platformIcon, playstyleIcon, userIcon } from 'utils/iconsMap'
import type { Profile as ProfileProps } from 'types'

type ProfileCardCompactProps = {
  profile: ProfileProps
  archived: boolean
  dateMatched: Date
  discordUsername: string
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainInfo: {
    flex: 1,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

const ProfileCardCompact = ({ profile, archived, dateMatched, discordUsername }: ProfileCardCompactProps) => {
  const [expanded, setExpanded] = useState(false)
  const [isUsernameHighlighted, setUsernameHighlighted] = useState(false)

  const { icon, personalInfo, gameInfo } = profile

  const handleLongPress = async () => {
    await Clipboard.setStringAsync(discordUsername)
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    setUsernameHighlighted(true)
    setTimeout(() => {
      setUsernameHighlighted(false)
    }, 1000)
  }

  return (
    <Pressable
      style={[
        { backgroundColor: colors.white },
        archived && {
          backgroundColor: 'rgba(25, 25, 25, 0.1)',
        },
      ]}
      onPress={() => setExpanded(!expanded)}
      onLongPress={handleLongPress}>
      {/* main info */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* user icon */}
        <View style={{ backgroundColor: icon.background, margin: 5 }}>
          <Icon uri={userIcon[icon.foreground].uri} size={50} />
        </View>

        <View style={styles.mainInfo}>
          {/* name & platforms */}
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', columnGap: 4 }}>
              <Text style={{ fontWeight: 'bold' }}>{personalInfo.name}</Text>
              <Text>·</Text>
              <Text style={{ fontWeight: 'normal' }}>{personalInfo.pronouns}</Text>
              <Icon uri={communicationMethodIcon[gameInfo.communication].uri} size={15} />
            </View>

            {gameInfo.platforms.map((platformCode) => platformIcon[platformCode].icon())}
          </View>
          {/* match date & discord username */}
          <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 8 }}>
            <Text>Matched {dateMatched.toLocaleDateString()}</Text>
            <Text style={[isUsernameHighlighted && { backgroundColor: colors.primary, color: colors.white }]}>
              {discordUsername}
            </Text>
          </View>
        </View>
      </View>

      {expanded && (
        <View
          style={{
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'wrap',
            rowGap: 5,
          }}>
          <ProfileDetail type="Rank" align="center">
            <Text>{gameInfo.rank}</Text>
          </ProfileDetail>
          <ProfileDetail type="Roles" align="center">
            {gameInfo.roles.map((role) => (
              <Text>{role}</Text>
            ))}
          </ProfileDetail>

          <ProfileDetail type="Languages" align="center">
            <Text>{personalInfo.languages.map((language) => languageIcon[language].emoji)}</Text>
          </ProfileDetail>

          <ProfileDetail type="Region" align="center">
            <Text style={{ backgroundColor: colors.accent, color: colors.white }}>{gameInfo.region}</Text>
          </ProfileDetail>

          <ProfileDetail type="Playstyle" align="center">
            <Icon.Group>
              {playstyleIcon.reaction[gameInfo.playstyle.reaction].icon()}
              {playstyleIcon.setting[gameInfo.playstyle.setting].icon()}
              {playstyleIcon.approach[gameInfo.playstyle.approach].icon()}
            </Icon.Group>
          </ProfileDetail>

          <ProfileDetail type="Schedule" align="center">
            <Availability availability={personalInfo.availability} />
          </ProfileDetail>

          {personalInfo.flairs && (
            <ProfileDetail type="Flairs" align="center">
              {personalInfo.flairs.map((flair) => (
                <Text.Flair key={flair} title={flair} />
              ))}
            </ProfileDetail>
          )}
        </View>
      )}
    </Pressable>
  )
}

export default ProfileCardCompact
