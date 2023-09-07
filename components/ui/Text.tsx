import { Pressable, StyleSheet, Text as TextRN } from 'react-native'
import colors from 'utils/colors'
import type { TextProps, ButtonProps } from 'react-native'

type TextButtonType = TextProps & ButtonProps

type TextFlairProps = TextProps & {
  title: string
}

type TextOptionProps = TextProps & {
  label: string
  selected: boolean
  onPress: () => void
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter-Regular',
    color: colors.text,
  },
  button: {
    fontFamily: 'Inter-Bold',
    backgroundColor: colors.primary,
    color: colors.white,
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 5,
  },
  flair: {
    fontFamily: 'Inter-Medium',
    borderRadius: 9999,
    backgroundColor: colors.primary,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.white,
    paddingHorizontal: 8,
  },
  option: {
    fontFamily: 'Inter-Regular',
    color: colors.text,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  optionSelected: {
    color: colors.white,
    backgroundColor: colors.primary,
  },
})

const Text = ({ children, style }: TextProps) => <TextRN style={[styles.text, style]}>{children}</TextRN>

Text.Button = ({ title, style, onPress }: TextButtonType) => {
  return (
    <Pressable onPress={onPress}>
      <TextRN style={[styles.button, style]}>{title}</TextRN>
    </Pressable>
  )
}

Text.Flair = ({ title, style }: TextFlairProps) => <TextRN style={[styles.flair, style]}>{title}</TextRN>

Text.Option = ({ label, selected, onPress }: TextOptionProps) => (
  <Pressable onPress={onPress}>
    <TextRN style={[styles.option, selected && styles.optionSelected]}>{label}</TextRN>
  </Pressable>
)

export default Text
