import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  text: {
    color: colors.textContent,
    fontSize: 12,
    fontWeight: 600,
  },
})
