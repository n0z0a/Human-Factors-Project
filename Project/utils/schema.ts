import { string, array, number, object } from 'yup'
import {
  AVAILABLE_COMMUNICATION_METHODS,
  AVAILABLE_LANGUAGES,
  AVAILABLE_PLATFORMS,
  DAYS_OF_THE_WEEK,
  PLAYSTYLE_DECISION_MAKING_LEVEL,
  PLAYSTYLE_HEAT_LEVEL,
  PLAYSTYLE_TRY_HARD_LEVEL,
} from 'types/constants'
import { DayOfTheWeekCode, Flair, MatchingPreference, Pronoun, Region, ValorantRank, ValorantRole } from 'types/enums'

const personalInformationSchema = object({
  name: string().required('Name required').min(2, 'Too short!').max(15, 'Too long!'),
  pronouns: string().required('Pronouns required').oneOf(Object.values(Pronoun)),
  languages: array()
    .defined()
    .of(string().defined().oneOf(Object.keys(AVAILABLE_LANGUAGES)))
    .min(1, 'At least 1 language required'),
  flairs: array()
    .of(string().defined().oneOf(Object.values(Flair)))
    .optional(),
  blurp: string().optional().max(32, 'Max 32 character'),
  availability: object({
    weekdays: object({
      days: array().of(
        number()
          .defined()
          .oneOf([
            DAYS_OF_THE_WEEK[DayOfTheWeekCode.Monday].value,
            DAYS_OF_THE_WEEK[DayOfTheWeekCode.Tuesday].value,
            DAYS_OF_THE_WEEK[DayOfTheWeekCode.Wednesday].value,
            DAYS_OF_THE_WEEK[DayOfTheWeekCode.Thursday].value,
            DAYS_OF_THE_WEEK[DayOfTheWeekCode.Friday].value,
          ])
      ),
      times: array().of(
        number()
          .defined()
          .oneOf([DAYS_OF_THE_WEEK[DayOfTheWeekCode.Saturday].value, DAYS_OF_THE_WEEK[DayOfTheWeekCode.Sunday].value])
      ),
    }).required(),
    weekend: object({
      days: array().of(
        number().oneOf([
          DAYS_OF_THE_WEEK[DayOfTheWeekCode.Monday].value,
          DAYS_OF_THE_WEEK[DayOfTheWeekCode.Tuesday].value,
          DAYS_OF_THE_WEEK[DayOfTheWeekCode.Wednesday].value,
          DAYS_OF_THE_WEEK[DayOfTheWeekCode.Thursday].value,
          DAYS_OF_THE_WEEK[DayOfTheWeekCode.Friday].value,
        ])
      ),
      times: array().of(
        number().oneOf([
          DAYS_OF_THE_WEEK[DayOfTheWeekCode.Saturday].value,
          DAYS_OF_THE_WEEK[DayOfTheWeekCode.Sunday].value,
        ])
      ),
    }).required(),
  }).defined(),
}).defined()

const gameInformationSchema = object({
  matchingPreference: string().oneOf(Object.values(MatchingPreference)).required(),
  roles: array()
    .of(string().oneOf(Object.values(ValorantRole)).required())
    .required()
    .min(1),
  communication: string().oneOf(Object.keys(AVAILABLE_COMMUNICATION_METHODS)).required(),
  platforms: array()
    .of(
      string()
        .oneOf(Object.values(AVAILABLE_PLATFORMS).map((platform) => platform.value))
        .required()
    )
    .required()
    .min(1),
  rank: string().oneOf(Object.values(ValorantRank)).required(),
  region: string().oneOf(Object.values(Region)).required(),
  playstyle: object({
    reaction: number()
      .oneOf(Object.values(PLAYSTYLE_HEAT_LEVEL).map((level) => level.value))
      .required(),
    setting: number()
      .oneOf(Object.values(PLAYSTYLE_TRY_HARD_LEVEL).map((level) => level.value))
      .required(),
    approach: number()
      .oneOf(Object.values(PLAYSTYLE_DECISION_MAKING_LEVEL).map((level) => level.value))
      .required(),
  }).required(),
})

export { personalInformationSchema, gameInformationSchema }
