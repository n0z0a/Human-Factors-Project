import { StyleSheet, View } from 'react-native'
import Icon from 'components/ui/Icon'
import Text from 'components/ui/Text'
import colors from 'utils/colors'
import { timeIcon } from 'utils/iconsMap'
import { DAYS_OF_THE_WEEK, TIME_OF_DAY } from 'types/constants'
import { DayOfTheWeekCode, TimeCode } from 'types/enums'
import type { Availability as AvailabilityType } from 'types'

type AvailabilityProps = {
  availability: AvailabilityType
}

type AvailabilityItemProps = {
  targetDays: 'weekdays' | 'weekend'
  daysAvailable?: DayOfTheWeekCode[]
  timesAvailable?: TimeCode[]
}

const styles = StyleSheet.create({
  availabilityItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 4,
  },
  daysContainer: {
    flexDirection: 'row',
    columnGap: 2,
  },
  day: {
    borderRadius: 9999,
    backgroundColor: 'grey',
    color: colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 20,
    height: 20,
  },
  dayAvailable: {
    backgroundColor: colors.accent,
  },
})

const Availability = ({ availability }: AvailabilityProps) => {
  return (
    <View>
      {/* weekdays */}
      <Availability.Item
        targetDays="weekdays"
        daysAvailable={availability.weekdays.days}
        timesAvailable={availability.weekdays.times}
      />

      {/* weekend */}
      <Availability.Item
        targetDays="weekend"
        daysAvailable={availability.weekend.days}
        timesAvailable={availability.weekend.times}
      />
    </View>
  )
}

Availability.Item = ({ targetDays, daysAvailable, timesAvailable }: AvailabilityItemProps) => {
  const daysDesignation = {
    weekdays: [
      DayOfTheWeekCode.Monday,
      DayOfTheWeekCode.Tuesday,
      DayOfTheWeekCode.Wednesday,
      DayOfTheWeekCode.Thursday,
      DayOfTheWeekCode.Friday,
    ],
    weekend: [DayOfTheWeekCode.Saturday, DayOfTheWeekCode.Sunday],
  }

  return (
    <View style={styles.availabilityItemContainer}>
      <View style={styles.daysContainer}>
        {daysDesignation[targetDays].map((dayCode) => (
          <Text key={dayCode} style={[styles.day, daysAvailable?.includes(dayCode) && styles.dayAvailable]}>
            {DAYS_OF_THE_WEEK[dayCode].abbreviation}
          </Text>
        ))}
      </View>

      <Icon.Group>
        {Object.values(TIME_OF_DAY).map((time) => (
          <View key={timeIcon[time.value].key}>
            {timeIcon[time.value].icon(!timesAvailable?.includes(time.value) && { color: 'grey' })}
          </View>
        ))}
      </Icon.Group>
    </View>
  )
}

export default Availability
