import { Text, StyleSheet, Pressable, FlatList } from 'react-native'
import colors from 'utils/colors'

type SegmentedButtonProps = {
  options: {
    label: string
    value: string
  }[]
  selectedValue: string
  onOptionChange: (value: string) => void
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  buttonSelected: {
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextSelected: {
    color: colors.white,
  },
})

const SegmentedButton = ({ options, selectedValue, onOptionChange }: SegmentedButtonProps) => {
  const handleOptionPress = (option: any, index: number) => {
    onOptionChange(option.value)
  }

  return (
    <FlatList
      data={options}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => handleOptionPress(item, index)}
          style={[styles.button, item.value === selectedValue && styles.buttonSelected]}>
          <Text style={[styles.buttonText, item.value === selectedValue && styles.buttonTextSelected]}>
            {item.label}
          </Text>
        </Pressable>
      )}
      keyExtractor={(item) => item.value}
      contentContainerStyle={styles.container}
      horizontal
    />
  )
}

export default SegmentedButton
