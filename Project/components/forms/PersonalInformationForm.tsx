import { Field, Formik, FormikProps } from 'formik'
import { StyleSheet, TextInput, View } from 'react-native'
import { InferType } from 'yup'
import { AVAILABLE_LANGUAGES, DAYS_OF_THE_WEEK, TIME_OF_DAY } from 'types/constants'
import { personalInformationSchema } from 'utils/schema'
import Text from 'components/ui/Text'
import colors from 'utils/colors'
import SelectField from 'components/ui/SelectField'
import { DayOfTheWeekCode, Flair, Pronoun, TimeCode } from 'types/enums'

type FormValues = InferType<typeof personalInformationSchema>

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 8,
    paddingVertical: 20,
    backgroundColor: 'lightgray',
    rowGap: 10,
  },
  textField: {
    backgroundColor: colors.white,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  submitButton: {
    borderWidth: 1,
    borderColor: 'green',
    textAlign: 'center',
  },
})

const PersonalInformationForm = () => {
  const initialValues: FormValues = {
    name: 'Ash',
    pronouns: Pronoun.THEY,
    languages: ['en', 'jp'],
    flairs: [Flair.LGBTQ, Flair.STREAMER],
    blurp: '',
    availability: {
      weekdays: {
        days: [DayOfTheWeekCode.Monday, DayOfTheWeekCode.Wednesday, DayOfTheWeekCode.Friday],
        times: [TimeCode.Day, TimeCode.Evening, TimeCode.Night],
      },
      weekend: {
        days: [DayOfTheWeekCode.Saturday, DayOfTheWeekCode.Sunday],
        times: [TimeCode.Day, TimeCode.Night],
      },
    },
  }

  const onSubmit = (values: FormValues) => {
    console.log(values)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikBag: FormikProps<FormValues>) => (
        <View style={styles.formContainer}>
          {console.log(formikBag)}

          <Text>Enter your display name</Text>
          <TextInput
            placeholder="Display Name"
            onChangeText={formikBag.handleChange('name')}
            onBlur={formikBag.handleBlur('name')}
            value={formikBag.values.name}
            style={styles.textField}
          />

          <Text>Select your preferred pronouns </Text>
          <Field
            name="pronouns"
            component={SelectField}
            options={Object.values(Pronoun).map((pronoun) => ({
              label: pronoun,
              value: pronoun,
            }))}
          />

          <Text>Select any languages you use to communicate </Text>
          <Field name="languages" component={SelectField} options={Object.values(AVAILABLE_LANGUAGES)} isMulti />

          <Text>Select any flairs that identify you (optional)</Text>
          <Field
            name="flairs"
            component={SelectField}
            options={Object.values(Flair).map((flair) => ({ label: flair, value: flair }))}
            isMulti
          />

          <Text>Select what days and times you are available</Text>
          <Text>During the weekdays:</Text>
          <Field
            name="availability.weekdays.days"
            component={SelectField}
            options={[
              DAYS_OF_THE_WEEK[DayOfTheWeekCode.Monday],
              DAYS_OF_THE_WEEK[DayOfTheWeekCode.Tuesday],
              DAYS_OF_THE_WEEK[DayOfTheWeekCode.Wednesday],
              DAYS_OF_THE_WEEK[DayOfTheWeekCode.Thursday],
              DAYS_OF_THE_WEEK[DayOfTheWeekCode.Friday],
            ]}
            isMulti
          />
          <Field
            name="availability.weekdays.times"
            component={SelectField}
            options={[TIME_OF_DAY[TimeCode.Day], TIME_OF_DAY[TimeCode.Evening], TIME_OF_DAY[TimeCode.Night]]}
            isMulti
          />
          <Text>During the weekends:</Text>
          <Field
            name="availability.weekend.days"
            component={SelectField}
            options={[DAYS_OF_THE_WEEK[DayOfTheWeekCode.Saturday], DAYS_OF_THE_WEEK[DayOfTheWeekCode.Sunday]]}
            isMulti
          />
          <Field
            name="availability.weekend.times"
            component={SelectField}
            options={[TIME_OF_DAY[TimeCode.Day], TIME_OF_DAY[TimeCode.Evening], TIME_OF_DAY[TimeCode.Night]]}
            isMulti
          />

          <TextInput
            placeholder="Tell others about yourself (optional)"
            onChangeText={formikBag.handleChange('blurp')}
            onBlur={formikBag.handleBlur('blurp')}
            value={formikBag.values.blurp}
            multiline
            numberOfLines={3}
            style={styles.textField}
          />
          {formikBag.dirty && <Text.Button title="Save" style={styles.submitButton} onPress={formikBag.handleSubmit} />}
        </View>
      )}
    </Formik>
  )
}

export default PersonalInformationForm
