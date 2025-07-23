import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  description: {
    flex: 1,
    color: colors.textContent,
    fontSize: 14,
    fontWeight: 600,
  },
})
