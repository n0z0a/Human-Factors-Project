import { Image, Pressable, StyleSheet, View } from 'react-native'
import colors from 'utils/colors'
import type { PressableProps } from 'react-native'

type IconProps = {
  uri: ReturnType<typeof require>
  size: number
  color?: string
}

type IconGroupProps = {
  children: React.ReactNode
}

type IconButtonProps = PressableProps &
  IconProps & {
    toggled?: boolean
  }

const styles = StyleSheet.create({
  iconGroupContainer: {
    flexDirection: 'row',
    columnGap: 4,
    flexWrap: 'wrap',
  },
  iconButtonToggled: {
    backgroundColor: colors.black,
    color: colors.white,
  },
})

const Icon = ({ uri, size, color }: IconProps) => (
  <Image source={uri} style={{ width: size, height: size, backgroundColor: color }} />
)

Icon.Group = ({ children }: IconGroupProps) => {
  return <View style={styles.iconGroupContainer}>{children}</View>
}

Icon.Button = ({ uri, size, toggled, onPress }: IconButtonProps) => (
  <Pressable onPress={onPress} style={toggled && styles.iconButtonToggled}>
    <Image source={uri} style={{ width: size, height: size }} />
  </Pressable>
)

export default Icon
