import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs/src/types'
import Svg, { Path } from 'react-native-svg'

export const LIST_MENU: {
  name: string
  title: string
  icon: BottomTabNavigationOptions['tabBarIcon']
}[] = [
  {
    name: 'index',
    title: 'Beranda',
    icon: (props) =>
      props.focused ? (
        <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
          {/* material-symbols:home-rounded */}
          <Path
            fill={props.color}
            d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"
          />
        </Svg>
      ) : (
        <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
          {/* material-symbols:home-outline-rounded */}
          <Path
            fill={props.color}
            d="M6 19h3v-5q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.712-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.412-.587T4 19m8-6.75"
          />
        </Svg>
      ),
  },
  {
    name: 'trending',
    title: 'Trending',
    icon: (props) => (
      <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
        {/* material-symbols:trending-up */}
        <Path
          fill={props.color}
          d="M3.4 18 2 16.6l7.4-7.45 4 4L18.6 8H16V6h6v6h-2V9.4L13.4 16l-4-4z"
        />
      </Svg>
    ),
  },
  {
    name: 'video',
    title: 'Live & Video',
    icon: (props) =>
      props.focused ? (
        <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
          {/* material-symbols:live-tv-rounded */}
          <Path
            fill={props.color}
            d="m11.05 14.5 4.15-2.65q.45-.3.45-.85t-.45-.85L11.05 7.5q-.5-.325-1.025-.05t-.525.875v5.35q0 .6.525.875t1.025-.05M4 19q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v1q0 .425-.288.713T15 21H9q-.425 0-.712-.288T8 20v-1z"
          />
        </Svg>
      ) : (
        <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
          {/* material-symbols:live-tv-outline-rounded */}
          <Path
            fill={props.color}
            d="m11.05 14.5 4.15-2.65q.45-.3.45-.85t-.45-.85L11.05 7.5q-.5-.325-1.025-.05t-.525.875v5.35q0 .6.525.875t1.025-.05M4 19q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v1q0 .425-.288.713T15 21H9q-.425 0-.712-.288T8 20v-1zm0-2h16V5H4zm0 0V5z"
          />
        </Svg>
      ),
  },
  {
    name: 'notification',
    title: 'Notifikasi',
    icon: (props) =>
      props.focused ? (
        <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
          {/* material-symbols:notifications-rounded */}
          <Path
            fill={props.color}
            d="M5 19q-.425 0-.712-.288T4 18t.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h1q.425 0 .713.288T20 18t-.288.713T19 19zm7 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22"
          />
        </Svg>
      ) : (
        <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
          {/* material-symbols:notifications-outline-rounded */}
          <Path
            fill={props.color}
            d="M5 19q-.425 0-.712-.288T4 18t.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h1q.425 0 .713.288T20 18t-.288.713T19 19zm7 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6 9.175 7.175 8 10z"
          />
        </Svg>
      ),
  },
  {
    name: 'me',
    title: 'Saya',
    icon: (props) =>
      props.focused ? (
        <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
          {/* material-symbols:person-rounded */}
          <Path
            fill={props.color}
            d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 6v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388 3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18"
          />
        </Svg>
      ) : (
        <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
          <Path
            fill={props.color}
            d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 6v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388 3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18m2 0h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8"
          />
        </Svg>
      ),
  },
]
