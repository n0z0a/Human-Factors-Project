import { Field, Formik, FormikProps } from 'formik'
import { StyleSheet, View } from 'react-native'
import { InferType } from 'yup'
import {
  AVAILABLE_COMMUNICATION_METHODS,
  PLAYSTYLE_DECISION_MAKING_LEVEL,
  PLAYSTYLE_HEAT_LEVEL,
  PLAYSTYLE_TRY_HARD_LEVEL,
} from 'types/constants'
import Text from 'components/ui/Text'
import colors from 'utils/colors'
import SelectField from 'components/ui/SelectField'
import {
  CommunicationMethod,
  DayOfTheWeekCode,
  DecisionMakingLevel,
  Flair,
  HeatLevel,
  MatchingPreference,
  PlatformCode,
  Pronoun,
  Region,
  TimeCode,
  TryHardLevel,
  ValorantRank,
  ValorantRole,
} from 'types/enums'

type FormValues = InferType<typeof gameInformationForm>

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

const GameInformationForm = () => {
  const initialValues: FormValues = {
    matchingPreference: MatchingPreference.SIMILAR,
    roles: [ValorantRole.CONTROLLER],
    communication: CommunicationMethod.Text,
    platforms: [PlatformCode.PC],
    rank: ValorantRank.IMMORTAL,
    region: Region.LATAM,
    playstyle: {
      reaction: HeatLevel.Chill,
      setting: TryHardLevel.Casual,
      approach: DecisionMakingLevel.Strategic,
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

          <Text>Compared to you, what types of players would you like to be matched with? </Text>
          <Field
            name="matchingPreference"
            component={SelectField}
            options={Object.values(MatchingPreference).map((preference) => ({
              label: preference,
              value: preference,
            }))}
          />

          {/* error */}
          {/* <Text>What are your preferred platforms to play on?</Text>
          <Field name="platforms" component={SelectField} options={Object.values(AVAILABLE_PLATFORMS)} isMulti /> */}

          <Text>What is your rank?</Text>
          <Field
            name="rank"
            component={SelectField}
            options={Object.values(ValorantRank).map((method) => ({ label: method, value: method }))}
          />

          <Text>What region do you play on?</Text>
          <Field
            name="region"
            component={SelectField}
            options={Object.keys(Region).map((regionKey) => ({
              label: Region[regionKey as keyof typeof Region],
              value: regionKey,
            }))}
          />

          <Text>Describe your playstyle</Text>
          <Text>When something goes wrong, how is your initial reaction?</Text>
          <Field name="playstyle.reaction" component={SelectField} options={Object.values(PLAYSTYLE_HEAT_LEVEL)} />

          <Text>In terms of how hard you try to win, what kind of player are you?</Text>
          <Field name="playstyle.setting" component={SelectField} options={Object.values(PLAYSTYLE_TRY_HARD_LEVEL)} />

          <Text>How would you describe your decision making style?</Text>
          <Field
            name="playstyle.approach"
            component={SelectField}
            options={Object.values(PLAYSTYLE_DECISION_MAKING_LEVEL)}
          />

          <Text>What is your preferred method to communicate?</Text>
          <Field
            name="communication"
            component={SelectField}
            options={Object.values(AVAILABLE_COMMUNICATION_METHODS)}
          />

          {formikBag.dirty && <Text.Button title="Save" style={styles.submitButton} onPress={formikBag.handleSubmit} />}
        </View>
      )}
    </Formik>
  )
}

export default GameInformationForm
