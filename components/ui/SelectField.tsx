import { StyleSheet } from 'react-native'
import { FieldProps } from 'formik'
import { FlatList } from 'react-native-gesture-handler'
import Text from 'components/ui/Text'

type Option = {
  label: string
  value: string
}

interface SelectFieldProps extends FieldProps {
  options: Option[]
  isMulti?: boolean
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 4,
  },
})

const SelectField = ({ field, form, options, isMulti = false }: SelectFieldProps) => {
  const isSelected = (option: Option) => {
    if (isMulti) {
      return (field.value as any[]).find((value) => value === option.value)
    }
    return field.value === option.value
  }

  const onOptionPress = (option: Option) => {
    if (isMulti) {
      if (isSelected(option)) {
        form.setFieldValue(
          field.name,
          (field.value as any[]).filter((value) => value !== option.value)
        )
      } else {
        form.setFieldValue(field.name, [...field.value, option.value])
      }
    } else {
      form.setFieldValue(field.name, option.value)
    }
  }

  return (
    <FlatList
      data={options}
      renderItem={({ item }) => (
        <Text.Option label={item.label} selected={isSelected(item)} onPress={() => onOptionPress(item)} />
      )}
      keyExtractor={(item) => item.label}
      horizontal
      contentContainerStyle={styles.container}
    />
  )
}

export default SelectField
