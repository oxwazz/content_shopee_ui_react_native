import { StatusBar } from 'expo-status-bar'
import { ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Flashsale } from '@/components/index/flashsale'
import { Header } from '@/components/index/header'
import { ListMenu } from '@/components/index/list-menu'
import { ListProduct } from '@/components/index/list-product'
import { ShopeeLive } from '@/components/index/shopee-live'
import { SimpleWalletInfo } from '@/components/index/simple-wallet-info'
import { COLORS } from '@/constants/colors'

export default function Page() {
  const insets = useSafeAreaInsets()

  return (
    <>
      <ScrollView
        style={{
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: COLORS.grey50,
        }}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      >
        <Header />
        <SimpleWalletInfo />
        <ListMenu />
        <View
          style={{
            flexDirection: 'row',
            gap: 8,
            paddingInline: 10,
            paddingTop: 10,
          }}
        >
          <ShopeeLive />
          <Flashsale />
        </View>
        <ListProduct />
      </ScrollView>
      <StatusBar style="light" backgroundColor={COLORS.primary400} />
    </>
  )
}
