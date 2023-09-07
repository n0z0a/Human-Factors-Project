import {
  CommunicationMethod,
  DayOfTheWeekCode,
  DecisionMakingLevel,
  HeatLevel,
  PlatformCode,
  TimeCode,
  TryHardLevel,
} from 'types/enums'

export const AVAILABLE_PLATFORMS = {
  [PlatformCode.PC]: {
    label: 'PC',
    value: PlatformCode.PC,
  },
  [PlatformCode.Playstation]: {
    label: 'Playstation',
    value: PlatformCode.Playstation,
  },
  [PlatformCode.Xbox]: {
    label: 'Xbox',
    value: PlatformCode.Xbox,
  },
  [PlatformCode.Switch]: {
    label: 'Switch',
    value: PlatformCode.Switch,
  },
} as const

export const AVAILABLE_LANGUAGES = {
  en: {
    label: 'English',
    value: 'en',
  },
  es: {
    label: 'Spanish',
    value: 'es',
  },
  jp: {
    label: 'Japanese',
    value: 'jp',
  },
} as const

export const AVAILABLE_COMMUNICATION_METHODS = {
  [CommunicationMethod.Text]: {
    label: 'Text',
    value: CommunicationMethod.Text,
  },
  [CommunicationMethod.Voice]: {
    label: 'Voice',
    value: CommunicationMethod.Voice,
  },
} as const

export const PLAYSTYLE_HEAT_LEVEL = {
  [HeatLevel.Chill]: {
    label: 'Chill',
    value: HeatLevel.Chill,
  },
  [HeatLevel.Spicy]: {
    label: 'Spicy',
    value: HeatLevel.Spicy,
  },
} as const

export const PLAYSTYLE_DECISION_MAKING_LEVEL = {
  [DecisionMakingLevel.Strategic]: {
    label: 'Strategic',
    value: DecisionMakingLevel.Strategic,
  },
  [DecisionMakingLevel.Aggressive]: {
    label: 'Aggressive',
    value: DecisionMakingLevel.Aggressive,
  },
  [DecisionMakingLevel.Mixed]: {
    label: 'Mixed',
    value: DecisionMakingLevel.Mixed,
  },
} as const

export const PLAYSTYLE_TRY_HARD_LEVEL = {
  [TryHardLevel.Casual]: {
    label: 'Casual',
    value: TryHardLevel.Casual,
  },
  [TryHardLevel.Competitive]: {
    label: 'Competitive',
    value: TryHardLevel.Competitive,
  },
} as const

export const DAYS_OF_THE_WEEK = {
  [DayOfTheWeekCode.Monday]: {
    label: 'Monday',
    value: DayOfTheWeekCode.Monday,
    abbreviation: 'M',
  },
  [DayOfTheWeekCode.Tuesday]: {
    label: 'Tuesday',
    value: DayOfTheWeekCode.Tuesday,
    abbreviation: 'T',
  },
  [DayOfTheWeekCode.Wednesday]: {
    label: 'Wednesday',
    value: DayOfTheWeekCode.Wednesday,
    abbreviation: 'W',
  },
  [DayOfTheWeekCode.Thursday]: {
    label: 'Thursday',
    value: DayOfTheWeekCode.Thursday,
    abbreviation: 'R',
  },
  [DayOfTheWeekCode.Friday]: {
    label: 'Friday',
    value: DayOfTheWeekCode.Friday,
    abbreviation: 'F',
  },
  [DayOfTheWeekCode.Saturday]: {
    label: 'Saturday',
    value: DayOfTheWeekCode.Saturday,
    abbreviation: 'S',
  },
  [DayOfTheWeekCode.Sunday]: {
    label: 'Sunday',
    value: DayOfTheWeekCode.Sunday,
    abbreviation: 'U',
  },
} as const

export const TIME_OF_DAY = {
  [TimeCode.Day]: {
    label: 'Day',
    value: TimeCode.Day,
  },
  [TimeCode.Evening]: {
    label: 'Evening',
    value: TimeCode.Evening,
  },
  [TimeCode.Night]: {
    label: 'Night',
    value: TimeCode.Night,
  },
} as const
