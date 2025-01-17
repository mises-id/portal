/*
 * @Author: lmk
 * @Date: 2022-05-25 11:23:10
 * @LastEditTime: 2022-06-16 16:42:08
 * @LastEditors: lmk
 * @Description:
 */
import { useTranslation } from "react-i18next"
/* FIXME(terra.js): Import from terra.js */
import { BondStatus } from "@terra-money/terra.proto/cosmos/staking/v1beta1/staking"
import { bondStatusFromJSON } from "@terra-money/terra.proto/cosmos/staking/v1beta1/staking"
import { Tag } from "components/display"

export const ValidatorStatus = ({ status }: { status: BondStatus }) => {
  const { t } = useTranslation()

  const color =
    bondStatusFromJSON(BondStatus[status]) === BondStatus.BOND_STATUS_BONDED
      ? "success"
      : "warning"

  const label =
    bondStatusFromJSON(BondStatus[status]) === BondStatus.BOND_STATUS_BONDED
      ? t("Active")
      : t("Inactive")

  return (
    <Tag color={color} small>
      {t(label)}
    </Tag>
  )
}

export const ValidatorJailed = () => {
  const { t } = useTranslation()
  return (
    <Tag color="danger" small>
      {t("Jailed")}
    </Tag>
  )
}
