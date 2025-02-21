import { COLORS } from '@/constants/colors'
import { PlatformPressable, Text } from '@react-navigation/elements'
import { useLinkBuilder, useTheme } from '@react-navigation/native'
import { Tabs } from 'expo-router'
import { View } from 'react-native'
import Svg, { Circle, G, Path } from 'react-native-svg'

export default function Layout() {
  return (
    <Tabs
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Svg width={30} height={30} viewBox="0 0 24 24">
                <Path
                  fill={color}
                  d="M5 20V9.5l7-5.288L19 9.5V20h-5.192v-6.384h-3.616V20z"
                />
              </Svg>
            ) : (
              <Svg width={30} height={30} viewBox="0 0 24 24">
                <Path
                  fill={color}
                  d="M6 19h3.692v-5.884h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.884h-2.616V20zm7-7.77"
                />
              </Svg>
            ),
        }}
      />
      <Tabs.Screen
        name="trending"
        options={{
          title: 'Trending',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Svg width={20} height={20} viewBox="0 0 14 14">
                <Path
                  fill={color}
                  fillRule="evenodd"
                  d="M5.495.126A.89.89 0 0 1 6.379.11c3.987 1.852 6.244 5.698 6.105 8.914-.06 1.351-.543 2.602-1.48 3.515-.938.914-2.285 1.448-3.99 1.451a5.186 5.186 0 0 1-5.502-4.967v-.008a4.38 4.38 0 0 1 2.251-3.94.5.5 0 0 1 .7.235A5 5 0 0 0 5.47 6.796c.494-.645.722-1.478.715-2.394-.008-1.09-.35-2.259-.924-3.254A.76.76 0 0 1 5.495.126"
                  clipRule="evenodd"
                />
              </Svg>
            ) : (
              <Svg width={20} height={20} viewBox="0 0 14 14">
                <Path
                  fill={color}
                  fillRule="evenodd"
                  d="M5.495.126A.89.89 0 0 1 6.379.11c3.987 1.852 6.244 5.698 6.105 8.914-.06 1.351-.543 2.602-1.48 3.515-.938.914-2.285 1.448-3.99 1.451a5.186 5.186 0 0 1-5.502-4.967v-.008a4.38 4.38 0 0 1 2.251-3.94.5.5 0 0 1 .7.235A5 5 0 0 0 5.47 6.796c.494-.645.722-1.478.715-2.394-.008-1.09-.35-2.259-.924-3.254A.76.76 0 0 1 5.495.126"
                  clipRule="evenodd"
                />
              </Svg>
            ),
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: 'Live & Video',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Svg width={25} height={25} viewBox="0 0 24 24">
                <G fill={color} fillRule="evenodd">
                  <Path d="m12.594 23.258-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
                  <Path
                    fill={color}
                    d="M16.95 4a1 1 0 0 0-1.414-1.414l-3.89 3.889a.5.5 0 0 1-.707 0L8.464 4A1 1 0 1 0 7.05 5.414L8.636 7H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-5.05zm-7.487 7.92a1.045 1.045 0 0 1 1.458-.842c.355.154 1.028.467 1.868.952s1.449.912 1.76 1.142a1.045 1.045 0 0 1 0 1.683c-.31.229-.914.652-1.76 1.14-.847.49-1.515.8-1.868.954a1.045 1.045 0 0 1-1.458-.842 19 19 0 0 1-.109-2.094c0-.966.066-1.708.11-2.092"
                  />
                </G>
              </Svg>
            ) : (
              <Svg width={25} height={25} viewBox="0 0 24 24">
                <G fill={color} fillRule="evenodd">
                  <Path d="m12.594 23.258-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
                  <Path
                    fill={color}
                    d="M16.95 2.586a1 1 0 0 1 0 1.414l-3 3H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3.636L7.05 5.414A1 1 0 0 1 8.465 4l2.474 2.475a.5.5 0 0 0 .707 0l3.89-3.89a1 1 0 0 1 1.414 0M19 9H5v10h14zM8.98 11.547a1.232 1.232 0 0 1 1.72-.994 22 22 0 0 1 2.2 1.123 22 22 0 0 1 2.075 1.346c.668.494.67 1.489 0 1.984A22 22 0 0 1 12.9 16.35c-.997.576-1.785.943-2.2 1.124a1.23 1.23 0 0 1-1.72-.993 23 23 0 0 1-.128-2.467c0-1.14.078-2.014.128-2.467m1.902 1.306a23 23 0 0 0 0 2.32 23 23 0 0 0 2.008-1.16 23 23 0 0 0-2.008-1.16"
                  />
                </G>
              </Svg>
            ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notifikasi',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Svg width={24} height={24}>
                <Path
                  fill={color}
                  fillRule="evenodd"
                  d="M12 1a2 2 0 0 0-1.98 2.284A7 7 0 0 0 5 10v8H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-8a7 7 0 0 0-5.02-6.716Q14 3.144 14 3a2 2 0 0 0-2-2m2 21a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1"
                  clipRule="evenodd"
                />
              </Svg>
            ) : (
              <Svg width={24} height={24}>
                <G fill="none" stroke={color} strokeWidth={1.5}>
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 19v-9a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v9M6 19h12M6 19H4m14 0h2m-9 3h2"
                  />
                  <Circle cx={12} cy={3} r={1} />
                </G>
              </Svg>
            ),
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          title: 'Saya',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Svg width={24} height={24} viewBox="0 0 512 512">
                <Path
                  fill={color}
                  d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6M432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480"
                />
              </Svg>
            ) : (
              <Svg width={24} height={24} viewBox="0 0 512 512">
                <Path
                  fill="none"
                  stroke={color}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96"
                />
                <Path
                  fill="none"
                  stroke={color}
                  strokeMiterlimit={10}
                  strokeWidth={32}
                  d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304Z"
                />
              </Svg>
            ),
        }}
      />
    </Tabs>
  )
}

function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme()
  const { buildHref } = useLinkBuilder()

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <PlatformPressable
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              padding: 8,
              justifyContent: 'flex-end',
            }}
          >
            <View
              style={{
                width: 24,
                height: 24,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {options.tabBarIcon({
                color: isFocused ? COLORS.primary400 : COLORS.grey400,
                size: 24,
                focused: isFocused,
              })}
            </View>
            <Text
              style={{
                color: isFocused ? COLORS.primary400 : COLORS.grey400,
                fontSize: 10,
              }}
            >
              {label}
            </Text>
          </PlatformPressable>
        )
      })}
    </View>
  )
}
