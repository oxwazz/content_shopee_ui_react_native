import { Tabs } from 'expo-router'

import { COLORS } from '@/constants/colors'
import { LIST_MENU } from '@/constants/menus'

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary400,
        tabBarStyle: {
          height: 70,
        },
        tabBarItemStyle: {
          padding: 8,
        },
      }}
    >
      {LIST_MENU.map((menu) => (
        <Tabs.Screen
          key={menu.name}
          name={menu.name}
          options={{
            title: menu.title,
            tabBarIcon: menu.icon,
          }}
        />
      ))}
    </Tabs>
  )
}
