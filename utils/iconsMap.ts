import {
  AVAILABLE_PLATFORMS,
  AVAILABLE_LANGUAGES,
  PLAYSTYLE_HEAT_LEVEL,
  PLAYSTYLE_TRY_HARD_LEVEL,
  PLAYSTYLE_DECISION_MAKING_LEVEL,
  TIME_OF_DAY,
  AVAILABLE_COMMUNICATION_METHODS,
} from 'types/constants'
import {
  CommunicationMethod,
  DecisionMakingLevel,
  HeatLevel,
  IconForegroundKey,
  PlatformCode,
  TimeCode,
  TryHardLevel,
} from 'types/enums'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import colors from './colors'

type Icon = {
  key: string
  iconName: string
}

export const systemIcons = {
  PROFILE: ({ size, color }) => FontAwesomeIcon({ icon: 'user', size, color }),
  FEED: ({ size, color }) => FontAwesomeIcon({ icon: 'th', size, color }),
  MATCHES: ({ size, color }) => FontAwesomeIcon({ icon: 'user-group', size, color }),
  ARCHIVE: ({ size, color }) => FontAwesomeIcon({ icon: 'archive', size, color }),
  BACK_LEFT: ({ size, color }) => FontAwesomeIcon({ icon: 'chevron-left', size, color }),
  BACK_RIGHT: ({ size, color }) => FontAwesomeIcon({ icon: 'chevron-right', size, color }),
  STAR: ({ size, color }) => FontAwesomeIcon({ icon: 'star', size, color }),
}

export const userIcon: Record<keyof typeof IconForegroundKey, Icon> = {
  ACE: { key: 'ace of cards icon', uri: require('assets/icon.png') },
  ALIEN: { key: 'alien icon', uri: require('assets/icon.png') },
  AXOLOTL: { key: 'axolotl icon', uri: require('assets/icon.png') },
  CAT: { key: 'cat icon', uri: require('assets/icon.png') },
  FISH: { key: 'fish icon', uri: require('assets/icon.png') },
  GLASSES: { key: 'glasses icon', uri: require('assets/icon.png') },
  HERO: { key: 'hero icon', uri: require('assets/icon.png') },
  OCTOPUS: { key: 'octopus icon', uri: require('assets/icon.png') },
  OWL: { key: 'owl icon', uri: require('assets/icon.png') },
  PIG: { key: 'pig icon', uri: require('assets/icon.png') },
  PIRATE: { key: 'pirate icon', uri: require('assets/icon.png') },
  PUMPKIN: { key: 'pumpkin icon', uri: require('assets/icon.png') },
  ROBOT: { key: 'robot icon', uri: require('assets/icon.png') },
  SKULL: { key: 'skull icon', uri: require('assets/icon.png') },
  SPIDER: { key: 'spider icon', uri: require('assets/icon.png') },
  VAMPIRE: { key: 'vampire icon', uri: require('assets/icon.png') },
  WOLF: { key: 'wolf icon', uri: require('assets/icon.png') },
  YINYANG: { key: 'yin-yang icon', uri: require('assets/icon.png') },
}

export const platformIcon: Record<keyof typeof AVAILABLE_PLATFORMS, any> = {
  [PlatformCode.PC]: {
    key: 'pc icon',
    icon: (props) => FontAwesomeIcon({ icon: 'desktop', size: 20, color: props?.color || colors.text }),
  },
  [PlatformCode.Playstation]: {
    key: 'playstation icon',
    icon: (props) => FontAwesomeIcon({ icon: 'playstation', size: 20, color: props?.color || colors.text }),
  },
  [PlatformCode.Xbox]: {
    key: 'xbox icon',
    icon: (props) => FontAwesomeIcon({ icon: 'xbox', size: 20, color: props?.color || colors.text }),
  },
  [PlatformCode.Switch]: {
    key: 'nintendo switch icon',
    icon: (props) => FontAwesomeIcon({ icon: 'gamepad', size: 20, color: props?.color || colors.text }),
  },
}

// https://snack.expo.dev/@maskedman/flag-labels>
export const languageIcon: Record<
  keyof typeof AVAILABLE_LANGUAGES,
  {
    key: string
    emoji: string
  }
> = {
  en: {
    key: 'britain flag emoji',
    emoji: '🇬🇧',
  },
  es: {
    key: 'spain flag emoji',
    emoji: '🇪🇸',
  },
  jp: {
    key: 'japan flag emoji',
    emoji: '🇯🇵',
  },
}

export const playstyleIcon: {
  reaction: Record<keyof typeof PLAYSTYLE_HEAT_LEVEL, any>
  setting: Record<keyof typeof PLAYSTYLE_TRY_HARD_LEVEL, any>
  approach: Record<keyof typeof PLAYSTYLE_DECISION_MAKING_LEVEL, any>
} = {
  reaction: {
    [HeatLevel.Chill]: {
      key: 'chill icon',
      icon: () => FontAwesomeIcon({ icon: 'snowflake', size: 20, color: colors.accent }),
    },
    [HeatLevel.Spicy]: {
      key: 'spicy icon',
      icon: () => FontAwesomeIcon({ icon: 'fire', size: 20, color: colors.accent }),
    },
  },
  setting: {
    [TryHardLevel.Casual]: {
      key: 'casual icon',
      icon: () => FontAwesomeIcon({ icon: 'gamepad', size: 20, color: colors.accent }),
    },
    [TryHardLevel.Competitive]: {
      key: 'competitive icon',
      icon: () => FontAwesomeIcon({ icon: 'trophy', size: 20, color: colors.accent }),
    },
  },
  approach: {
    [DecisionMakingLevel.Strategic]: {
      key: 'aggressive icon',
      icon: (props) => FontAwesomeIcon({ icon: 'chess-rook', size: 20, color: props?.color || colors.accent }),
    },
    [DecisionMakingLevel.Aggressive]: {
      key: 'aggressive icon',
      icon: (props) => FontAwesomeIcon({ icon: 'fist-raised', size: 20, color: props?.color || colors.accent }),
    },
    [DecisionMakingLevel.Mixed]: {
      key: 'mixed icon',
      icon: (props) => FontAwesomeIcon({ icon: 'balance-scale', size: 20, color: props?.color || colors.accent }),
    },
  },
}

export const timeIcon: Record<keyof typeof TIME_OF_DAY, any> = {
  [TimeCode.Day]: {
    key: 'day icon',
    icon: (props) => FontAwesomeIcon({ icon: 'sun', size: 20, color: props?.color || colors.accent }),
  },
  [TimeCode.Evening]: {
    key: 'evening icon',
    icon: (props) => FontAwesomeIcon({ icon: 'cloud-sun', size: 20, color: props?.color || colors.accent }),
  },
  [TimeCode.Night]: {
    key: 'night icon',
    icon: (props) => FontAwesomeIcon({ icon: 'moon', size: 20, color: props?.color || colors.accent }),
  },
}

export const communicationMethodIcon: Record<keyof typeof AVAILABLE_COMMUNICATION_METHODS, any> = {
  [CommunicationMethod.Text]: {
    key: 'text icon',
    icon: (props) =>
      FontAwesomeIcon({ icon: 'keyboard', size: props?.size || 20, color: props?.color || colors.accent }),
  },
  [CommunicationMethod.Voice]: {
    key: 'voice icon',
    icon: (props) =>
      FontAwesomeIcon({ icon: 'microphone', size: props?.size || 20, color: props?.color || colors.accent }),
  },
}
