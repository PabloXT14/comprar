import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary,
    paddingTop: 62,
  },
  logo: {
    height: 32,
    width: 134,
    marginBottom: 42,
  },
  form: {
    width: '100%',
    gap: 8,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  content: {
    flex: 1,
    width: '100%',
    gap: 16,
    backgroundColor: colors.backgroundElevated,
    paddingHorizontal: 24,
    paddingTop: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderPrimary,
  },
  clearButton: {
    marginLeft: 'auto',
  },
  clearButtonText: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: 600,
  },
})
