/* eslint-disable */

import React, { Component } from 'react'
import {
  AccordionItemButton,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  Accordion,
} from 'react-accessible-accordion'
import styles from './Dashboard.module.css'
import cstyles from './Common.module.css'
import { TotalBalance, Info, AddressBalance } from './AppState'
import Utils from '../utils/utils'
import ScrollPane from './ScrollPane' // $FlowFixMe

export const BalanceBlockHighlight = ({
  pslValue,
  usdValue,
  currencyName,
}: any) => {
  const { bigPart, smallPart } = Utils.splitPslAmountIntoBigSmall(pslValue)
  return (
    <div
      style={{
        padding: '1em',
      }}
    >
      <div className={[cstyles.highlight, cstyles.xlarge].join(' ')}>
        <span>
          {currencyName} {bigPart}
        </span>
        <span className={[cstyles.small, cstyles.pslsmallpart].join(' ')}>
          {smallPart}
        </span>
      </div>
      <div className={[cstyles.sublight, cstyles.small].join(' ')}>
        {usdValue}
      </div>
    </div>
  )
}

const BalanceBlock = ({ pslValue, usdValue, topLabel, currencyName }: any) => {
  const { bigPart, smallPart } = Utils.splitPslAmountIntoBigSmall(pslValue)
  return (
    <div className={cstyles.padall}>
      <div className={[styles.sublight, styles.small].join(' ')}>
        {topLabel}
      </div>
      <div className={[cstyles.highlight, cstyles.large].join(' ')}>
        <span>
          {currencyName} {bigPart}
        </span>
        <span className={[cstyles.small, cstyles.pslsmallpart].join(' ')}>
          {smallPart}
        </span>
      </div>
      <div className={[cstyles.sublight, cstyles.small].join(' ')}>
        {usdValue}
      </div>
    </div>
  )
}

const AddressBalanceItem = ({ currencyName, pslPrice, item }: any) => {
  const { bigPart, smallPart } = Utils.splitPslAmountIntoBigSmall(
    Math.abs(item.balance),
  )
  return (
    <AccordionItem
      key={item.label}
      className={[cstyles.well, cstyles.margintopsmall].join(' ')}
      uuid={item.address}
    >
      <AccordionItemHeading>
        <AccordionItemButton className={cstyles.accordionHeader}>
          <div className={[cstyles.flexspacebetween].join(' ')}>
            <div>{Utils.splitStringIntoChunks(item.address, 6).join(' ')}</div>
            <div className={[styles.txamount, cstyles.right].join(' ')}>
              <div>
                <span>
                  {currencyName} {bigPart}
                </span>
                <span
                  className={[cstyles.small, cstyles.pslsmallpart].join(' ')}
                >
                  {smallPart}
                </span>
              </div>
              <div
                className={[
                  cstyles.sublight,
                  cstyles.small,
                  cstyles.padtopsmall,
                ].join(' ')}
              >
                {Utils.getPslToUsdString(pslPrice, Math.abs(item.balance))}
              </div>
            </div>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel />
    </AccordionItem>
  )
}

export default class Home extends Component<any, any> {
  render() {
    const { totalBalance, info, addressesWithBalance } = this.props
    return (
      <div>
        <div className={[cstyles.well, styles.balancebox].join(' ')}>
          <BalanceBlockHighlight
            pslValue={totalBalance.total}
            usdValue={Utils.getPslToUsdString(
              info.pslPrice,
              totalBalance.total,
            )}
            currencyName={info.currencyName}
          />

          <BalanceBlock
            topLabel='Transparent'
            pslValue={totalBalance.transparent}
            usdValue={Utils.getPslToUsdString(
              info.pslPrice,
              totalBalance.transparent,
            )}
            currencyName={info.currencyName}
          />

          <BalanceBlock
            topLabel='Shielded'
            pslValue={totalBalance.private}
            usdValue={Utils.getPslToUsdString(
              info.pslPrice,
              totalBalance.private,
            )}
            currencyName={info.currencyName}
          />
        </div>

        <div className={styles.addressbalancecontainer}>
          <ScrollPane offsetHeight={200}>
            <div className={styles.addressbooklist}>
              <div
                className={[
                  cstyles.flexspacebetween,
                  cstyles.tableheader,
                  cstyles.sublight,
                ].join(' ')}
              >
                <div>Address</div>
                <div>Balance</div>
              </div>
              {addressesWithBalance &&
                (addressesWithBalance.length === 0 ? (
                  <div className={[cstyles.center, cstyles.sublight].join(' ')}>
                    No Addresses with a balance
                  </div>
                ) : (
                  <Accordion>
                    {addressesWithBalance
                      .filter((ab: any) => ab.balance > 0)
                      .map((ab: any) => (
                        <AddressBalanceItem
                          key={ab.address}
                          item={ab}
                          currencyName={info.currencyName}
                          pslPrice={info.pslPrice}
                        />
                      ))}
                  </Accordion>
                ))}
            </div>
          </ScrollPane>
        </div>
      </div>
    )
  }
}
