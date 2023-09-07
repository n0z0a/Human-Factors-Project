import GameInformationForm from 'components/forms/GameInformationForm'
import PersonalInformationForm from 'components/forms/PersonalInformationForm'
import SegmentedButton from 'components/ui/SegmentedButton'
import { Stack, useNavigation, useRouter } from 'expo-router'
import { useState } from 'react'
import { Modal, Pressable, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from 'utils/colors'
import { systemIcons } from 'utils/iconsMap'

const formOptions = [
  { label: 'Personal Info', value: 'personal' },
  { label: 'Game Info', value: 'game' },
]

const SettingsScreen = () => {
  const [selectedForm, setSelectedForm] = useState(formOptions[0].value)
  const [modalVisible, setModalVisible] = useState(true)

  const handleFormChange = (value: string) => {
    setSelectedForm(value)
  }

  const router = useRouter()

  const handleClose = async () => {
    setModalVisible(false)
    router.replace('/profile')
  }

  return (
    <View>
      <Modal animationType="slide" visible={modalVisible} onRequestClose={handleClose} transparent>
        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: 8 }}>
          <Pressable onPress={handleClose}>{systemIcons.BACK_LEFT({ size: 20, color: colors.black })}</Pressable>
          <View style={{ alignItems: 'center' }}>
            <SegmentedButton options={formOptions} selectedValue={selectedForm} onOptionChange={handleFormChange} />
          </View>
        </View>
        {selectedForm === 'personal' && <PersonalInformationForm />}
        {selectedForm === 'game' && <GameInformationForm />}
      </Modal>
    </View>
  )
}

export default SettingsScreen
