import { LinearGradient } from "expo-linear-gradient"
import { Image, Text, View } from "react-native"

import { COLORS } from "@/constants/colors"
import { SvgShopeeArrowRight } from "@/constants/svg-icons"

export function ShopeeLive() {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        paddingInline: 6,
        paddingBlock: 12,
        borderRadius: 8,
        gap: 6,
        flex: 1,
        minHeight: 170,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
          height: 20,
        }}
      >
        <Text
          style={{
            fontWeight: 700,
            color: COLORS.primary400,
          }}
        >
          Shopee Live
        </Text>
        <SvgShopeeArrowRight size={8} color={COLORS.grey400} />
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 4,
          flex: 1,
        }}
      >
        {[1, 2].map((v) => {
          return (
            <View
              key={v}
              style={{
                flex: 1,
                borderRadius: 8,
                justifyContent: "flex-end",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                }}
                resizeMode='cover'
                source={require("../../assets/images/mock/#808080.webp")}
              />
              <LinearGradient
                start={[0, 0]}
                end={[1, 0]}
                colors={[COLORS.primary400, COLORS.primary200]}
                style={{
                  position: "absolute",
                  top: 4,
                  left: 4,
                  flexDirection: "row",
                  gap: 4,
                  alignItems: "center",
                  paddingInline: 3,
                  borderRadius: 4,
                }}
              >
                <View
                  style={{
                    height: 7,
                    width: 7,
                    borderRadius: "100%",
                    backgroundColor: COLORS.white,
                  }}
                />
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 9,
                    fontWeight: 600,
                  }}
                >
                  LIVE
                </Text>
              </LinearGradient>

              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 10,
                  padding: 4,
                }}
                numberOfLines={2}
              >
                Ketahanan 7 - 15 Hari Ketahanan 7 - 15 Hari Ketahanan 7 - 15
                Hari
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}
