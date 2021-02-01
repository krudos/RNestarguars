import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        centerVH: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        alignCenter: { alignItems: 'center' },
      }),
    [],
  );
};
