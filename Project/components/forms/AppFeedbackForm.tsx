import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Text from 'components/ui/Text'
import { Formik, FormikProps } from 'formik'
import { Button, Pressable, StyleSheet, TextInput, View } from 'react-native'
import colors from 'utils/colors'

type FormValues = {
  rating: number
  review: string
}

const styles = StyleSheet.create({
  formContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    borderColor: colors.primary,
    borderWidth: 2,
    backgroundColor: colors.white,
    borderRadius: 15,
    rowGap: 10,
    padding: 20,
  },
  textField: {
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    backgroundColor: colors.white,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
})

const AppFeedbackForm = () => {
  const initialValues: FormValues = {
    rating: 3,
    review: '',
  }

  const onSubmit = (values: FormValues) => {
    console.log(values)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikBag: FormikProps<FormValues>) => (
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Rate us (1-5)"
            onChangeText={formikBag.handleChange('rating')}
            onBlur={formikBag.handleBlur('rating')}
            inputMode="numeric"
            maxLength={1}
            multiLine
            style={styles.textField}
          />

          <TextInput
            placeholder="Tell us about your app experience"
            onChangeText={formikBag.handleChange('review')}
            onBlur={formikBag.handleBlur('review')}
            value={formikBag.values.review}
            multiline
            numberOfLines={3}
            style={styles.textField}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Pressable style={{ padding: 5 }}>
              <FontAwesomeIcon icon="xmark" size={25} color={colors.text} />
            </Pressable>

            <Pressable style={{ padding: 5 }}>
              <FontAwesomeIcon icon="check" size={25} color={colors.primary} />
            </Pressable>
          </View>

          {/* {formikBag.values.rating && formikBag.values.review && (
            <Text.Button title="Submit" onPress={formikBag.handleSubmit} />
          )} */}
        </View>
      )}
    </Formik>
  )
}

export default AppFeedbackForm
