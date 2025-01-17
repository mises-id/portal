/*
 * @Author: lmk
 * @Date: 2022-06-02 16:12:07
 * @LastEditTime: 2022-06-02 17:10:32
 * @LastEditors: lmk
 * @Description:
 */
import { ReactNode, useState } from "react"
// import { useTranslation } from "react-i18next"
// import ButtonGroup from "./ButtonGroup"
import styles from "./Range.module.scss"

interface Props {
  initial?: number
  includeLastDay?: boolean
  children: (start: number) => ReactNode
}

const Range = ({ initial, children, includeLastDay }: Props) => {
  // const { t } = useTranslation()
  const [selected] = useState(initial ?? 0)

  // const list = [
  //   { label: t("From genesis"), value: 0 },
  //   { label: t("Last day"), value: 3 },
  //   { label: t("{{d}} days", { d: 7 }), value: 7 },
  //   { label: t("{{d}} days", { d: 14 }), value: 14 },
  //   { label: t("{{d}} days", { d: 30 }), value: 30 },
  // ].filter(({ value }) => !(value === 3 && !includeLastDay))

  return (
    <article className={styles.grid}>
      {children(selected)}
      <span className={styles.tag}>*Estimated</span>
      {/* <ButtonGroup value={selected} onChange={setSelected} options={list} /> */}
    </article>
  )
}

export default Range
