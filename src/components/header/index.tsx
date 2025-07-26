import styles from "./styles.module.scss"
import { Image } from "antd"
import logo from "../../assets/logos/logo.svg";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} preview={false} />
      </div>
    </div>
  )
}