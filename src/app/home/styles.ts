import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary,
    paddingTop: 62,
    padding: 24,
    gap: 24,
  },
  logo: {
    height: 32,
    width: 134,
  },
})
