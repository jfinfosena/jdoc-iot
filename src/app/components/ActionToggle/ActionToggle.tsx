import cx from 'clsx';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Group, Tooltip } from '@mantine/core';

import classes from './ActionToggle.module.css';

import { IconMoon, IconSun } from '@tabler/icons-react';

export function ActionToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <Group justify="center">
      <Tooltip label={"Tema"}>
        <ActionIcon
          onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
          variant="light"
          size="md"
          aria-label="Toggle color scheme"
          color="orange"
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />

        </ActionIcon>
      </Tooltip>
    </Group>
  );
}