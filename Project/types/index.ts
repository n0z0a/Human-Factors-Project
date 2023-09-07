import { DayOfTheWeekCode, IconBackgroundKey, IconForegroundKey, TimeCode } from 'types/enums'
import {
  AVAILABLE_COMMUNICATION_METHODS,
  AVAILABLE_LANGUAGES,
  AVAILABLE_PLATFORMS,
  PLAYSTYLE_DECISION_MAKING_LEVEL,
  PLAYSTYLE_HEAT_LEVEL,
  PLAYSTYLE_TRY_HARD_LEVEL,
} from 'types/constants'

export type IconComponent = {
  key: string
  component: React.ComponentType
}

export type WeekdayCode =
  | DayOfTheWeekCode.Monday
  | DayOfTheWeekCode.Tuesday
  | DayOfTheWeekCode.Wednesday
  | DayOfTheWeekCode.Thursday
  | DayOfTheWeekCode.Friday

export type WeekendCode = DayOfTheWeekCode.Saturday | DayOfTheWeekCode.Sunday

export type Availability = {
  weekdays: {
    days: WeekdayCode[]
    times: TimeCode[]
  }
  weekend: {
    days: WeekendCode[]
    times: TimeCode[]
  }
}

export type PersonalInformation = {
  name: string
  pronouns: string
  languages: (keyof typeof AVAILABLE_LANGUAGES)[]
  flairs?: string[]
  blurp?: string
  availability: Availability
}

export type GameInformation = {
  matchingPreference: string
  roles: string[]
  communication: keyof typeof AVAILABLE_COMMUNICATION_METHODS
  platforms: (keyof typeof AVAILABLE_PLATFORMS)[]
  rank: string
  region: string
  playstyle: {
    reaction: keyof typeof PLAYSTYLE_HEAT_LEVEL
    setting: keyof typeof PLAYSTYLE_TRY_HARD_LEVEL
    approach: keyof typeof PLAYSTYLE_DECISION_MAKING_LEVEL
  }
}

export type Profile = {
  icon: {
    foreground: IconForegroundKey
    background: IconBackgroundKey
  }
  personalInfo: PersonalInformation
  gameInfo: GameInformation
}
