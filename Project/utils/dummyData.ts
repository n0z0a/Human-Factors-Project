import type { Profile } from 'types'
import {
  CommunicationMethod,
  DayOfTheWeekCode,
  DecisionMakingLevel,
  Flair,
  HeatLevel,
  IconBackgroundKey,
  IconForegroundKey,
  MatchingPreference,
  PlatformCode,
  Region,
  TimeCode,
  TryHardLevel,
  ValorantRank,
  ValorantRole,
} from 'types/enums'

export const dummyProfile: Profile = {
  icon: {
    foreground: IconForegroundKey.ALIEN,
    background: IconBackgroundKey.ORANGE,
  },
  personalInfo: {
    name: 'Ash',
    pronouns: 'they/them',
    languages: ['en', 'jp'],
    flairs: ['Streamer', 'LGBTQ+'],
    blurp:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
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
  },
  gameInfo: {
    matchingPreference: MatchingPreference.SIMILAR,
    roles: [ValorantRole.CONTROLLER, ValorantRole.INITIATOR],
    communication: CommunicationMethod.Voice,
    platforms: [PlatformCode.Playstation, PlatformCode.Xbox, PlatformCode.Switch],
    rank: ValorantRank.ASCENDANT,
    region: Region.KR,
    playstyle: {
      reaction: HeatLevel.Chill,
      setting: TryHardLevel.Competitive,
      approach: DecisionMakingLevel.Strategic,
    },
  },
}

export const dummyUserDatabase = {
  rootUser: {
    userId: 'rootUser',
    profile: { ...dummyProfile },
    likes: [],
    matches: [
      { userId: 'user7', archived: false, dateMatched: new Date('2022-03-01'), discordUsername: 'notabot#0001' },
      { userId: 'user8', archived: false, dateMatched: new Date('2022-03-15'), discordUsername: 'namigator#0001' },
      { userId: 'user9', archived: true, dateMatched: new Date('2022-04-02'), discordUsername: 'soulmaster#0001' },
    ],
  },
  user1: {
    userId: 'user1',
    profile: {
      personalInfo: {
        name: 'Ace',
        pronouns: 'he/him',
        languages: ['en', 'jp'],
        flairs: [Flair.JACK, Flair.VETERAN],
        blurp: undefined,
        availability: {
          weekdays: {
            days: [DayOfTheWeekCode.Friday],
            times: [TimeCode.Night],
          },
          weekend: {
            days: [DayOfTheWeekCode.Saturday, DayOfTheWeekCode.Sunday],
            times: [TimeCode.Day, TimeCode.Evening, TimeCode.Night],
          },
        },
      },
      gameInfo: {
        matchingPreference: MatchingPreference.SIMILAR,
        roles: [ValorantRole.INITIATOR, ValorantRole.DUELIST],
        communication: CommunicationMethod.Voice,
        platforms: [PlatformCode.PC, PlatformCode.Playstation],
        rank: ValorantRank.ASCENDANT,
        region: Region.NA,
        playstyle: {
          reaction: HeatLevel.Spicy,
          setting: TryHardLevel.Competitive,
          approach: DecisionMakingLevel.Mixed,
        },
      },
      icon: {
        foreground: IconForegroundKey.ACE,
        background: IconBackgroundKey.BLUE,
      },
    },
    likes: ['rootUser'],
    matches: [],
  },
  user2: {
    userId: 'user2',
    profile: {
      personalInfo: {
        name: 'Robin',
        pronouns: 'she/her',
        languages: ['es', 'jp', 'en'],
        flairs: [Flair.COLLECTOR, Flair.VETERAN],
        blurp: undefined,
        availability: {
          weekdays: {
            days: [DayOfTheWeekCode.Monday, DayOfTheWeekCode.Wednesday, DayOfTheWeekCode.Friday],
            times: [TimeCode.Night],
          },
          weekend: {
            days: [DayOfTheWeekCode.Sunday],
            times: [TimeCode.Day],
          },
        },
      },
      gameInfo: {
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
      },
      icon: {
        foreground: IconForegroundKey.GLASSES,
        background: IconBackgroundKey.GREEN,
      },
    },
    likes: [],
    matches: [],
  },
  user3: {
    userId: 'user3',
    profile: {
      personalInfo: {
        name: 'Zoro',
        pronouns: 'he/him',
        languages: ['en'],
        flairs: [Flair.OTP],
        blurp: undefined,
        availability: {
          weekdays: {
            days: [DayOfTheWeekCode.Tuesday, DayOfTheWeekCode.Thursday],
            times: [TimeCode.Evening, TimeCode.Night],
          },
          weekend: {
            days: [],
            times: [],
          },
        },
      },
      gameInfo: {
        matchingPreference: MatchingPreference.SIMILAR,
        roles: [ValorantRole.DUELIST],
        communication: CommunicationMethod.Voice,
        platforms: [PlatformCode.Switch],
        rank: ValorantRank.DIAMOND,
        region: Region.KR,
        playstyle: {
          reaction: HeatLevel.Chill,
          setting: TryHardLevel.Competitive,
          approach: DecisionMakingLevel.Aggressive,
        },
      },
      icon: {
        foreground: IconForegroundKey.WOLF,
        background: IconBackgroundKey.ORANGE,
      },
    },
    likes: ['rootUser'],
    matches: [],
  },
  user7: {
    userId: 'robostar',
    profile: {
      personalInfo: {
        name: 'Franky',
        pronouns: 'he/him',
        languages: ['en'],
        flairs: [Flair.CREATOR],
        blurp: undefined,
        availability: {
          weekdays: {
            days: [
              DayOfTheWeekCode.Tuesday,
              DayOfTheWeekCode.Wednesday,
              DayOfTheWeekCode.Thursday,
              DayOfTheWeekCode.Friday,
            ],
            times: [TimeCode.Day, TimeCode.Evening],
          },
          weekend: {
            days: [DayOfTheWeekCode.Saturday],
            times: [TimeCode.Day, TimeCode.Night],
          },
        },
      },
      gameInfo: {
        matchingPreference: MatchingPreference.SIMILAR,
        roles: [ValorantRole.SENTINEL],
        communication: CommunicationMethod.Voice,
        platforms: [PlatformCode.Switch],
        rank: ValorantRank.IRON,
        region: Region.NA,
        playstyle: {
          reaction: HeatLevel.Spicy,
          setting: TryHardLevel.Casual,
          approach: DecisionMakingLevel.Aggressive,
        },
      },
      icon: {
        foreground: IconForegroundKey.ROBOT,
        background: IconBackgroundKey.PURPLE,
      },
    },
    likes: [],
    matches: [
      { userId: 'rootUser', archived: false, dateMatched: new Date('2022-03-01'), discordUsername: 'rootUser#0001' },
    ],
  },
  user8: {
    userId: 'goldgal',
    profile: {
      personalInfo: {
        name: 'Nami',
        pronouns: 'she/her',
        languages: ['en'],
        flairs: [Flair.COLLECTOR, Flair.NEWBIE],
        blurp: undefined,
        availability: {
          weekdays: {
            days: [
              DayOfTheWeekCode.Monday,
              DayOfTheWeekCode.Tuesday,
              DayOfTheWeekCode.Wednesday,
              DayOfTheWeekCode.Friday,
            ],
            times: [TimeCode.Day, TimeCode.Evening],
          },
          weekend: {
            days: [],
            times: [],
          },
        },
      },
      gameInfo: {
        matchingPreference: MatchingPreference.SIMILAR,
        roles: [ValorantRole.CONTROLLER],
        communication: CommunicationMethod.Voice,
        platforms: [PlatformCode.Switch],
        rank: ValorantRank.GOLD,
        region: Region.KR,
        playstyle: {
          reaction: HeatLevel.Spicy,
          setting: TryHardLevel.Casual,
          approach: DecisionMakingLevel.Mixed,
        },
      },
      icon: {
        foreground: IconForegroundKey.HERO,
        background: IconBackgroundKey.BLUE,
      },
    },
    likes: [],
    matches: [
      { userId: 'rootUser', archived: false, dateMatched: new Date('2022-03-15'), discordUsername: 'rootUser#0001' },
    ],
  },
  user9: {
    userId: 'bonez',
    profile: {
      personalInfo: {
        name: 'Brooke',
        pronouns: 'he/they',
        languages: ['en'],
        flairs: [Flair.CREATOR, Flair.JACK],
        blurp: undefined,
        availability: {
          weekdays: {
            days: [DayOfTheWeekCode.Tuesday, DayOfTheWeekCode.Friday],
            times: [TimeCode.Night],
          },
          weekend: {
            days: [DayOfTheWeekCode.Saturday, DayOfTheWeekCode.Sunday],
            times: [TimeCode.Night],
          },
        },
      },
      gameInfo: {
        matchingPreference: MatchingPreference.SIMILAR,
        roles: [ValorantRole.DUELIST],
        communication: CommunicationMethod.Text,
        platforms: [PlatformCode.PC],
        rank: ValorantRank.GOLD,
        region: Region.AP,
        playstyle: {
          reaction: HeatLevel.Chill,
          setting: TryHardLevel.Casual,
          approach: DecisionMakingLevel.Strategic,
        },
      },
      icon: {
        foreground: IconForegroundKey.CAT,
        background: IconBackgroundKey.PINK,
      },
    },
    likes: [],
    matches: [
      { userId: 'rootUser', archived: true, dateMatched: new Date('2022-04-02'), discordUsername: 'rootUser#0001' },
    ],
  },
}

export const dummyCandidatePool = [
  { ...dummyUserDatabase.user1, readyToMatch: true },
  { ...dummyUserDatabase.user2, readyToMatch: false },
  { ...dummyUserDatabase.user3, readyToMatch: true },
]

export default dummyProfile
