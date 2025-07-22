import { TextInput, type TextInputProps } from 'react-native'

import { colors } from '@/styles/colors'

import { styles } from './styles'

type InputProps = TextInputProps

export function Input(props: InputProps) {
  return (
    <TextInput
      placeholderTextColor={colors.textMuted}
      style={styles.container}
      {...props}
    />
  )
}
