import { Icon, Image } from "minista"
import { ReactComponent as KiwiSVG } from "@/assets/images/kiwi.svg"

export const metadata = {
  title: "Home",
}

export default () => {
  console.log(123)
  return (
    <>
      <h1>Home</h1>
      <Image src="/src/assets/images/autumn.jpeg" />
      <KiwiSVG />
      <Icon iconId="cat" />
    </>
  )
}
