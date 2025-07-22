import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    backgroundColor: colors.backgroundElevated,
    paddingHorizontal: 16,

    borderWidth: 1,
    borderColor: colors.borderSecondary,
    borderRadius: 8,

    color: colors.textContent,
    fontSize: 14,
    fontWeight: 400,
  },
})
