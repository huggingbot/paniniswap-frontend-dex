import React, { useContext } from 'react'
import { Menu as UikitMenu, ConnectorNames } from '@paniniswap/paniniswap-uikit'
import { useWeb3React } from '@web3-react/core'
import { languageList } from 'constants/localisation/languages'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
// import useGetLocalProfile from 'hooks/useGetLocalProfile'
import { injected, bsc, walletconnect } from 'connectors'
import links from './config'

const Menu: React.FC = (props) => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const priceData = useGetPriceData()

  const paniniAddress = '0x1f546aD641B56b86fD9dCEAc473d1C7a357276B7'
  const cakePriceUsd = priceData && priceData.data[paniniAddress] ? Number(priceData.data[paniniAddress].price) : Number(0)
  // const profile = useGetLocalProfile()

  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={(connectorId: ConnectorNames) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }

        if (connectorId === 'bsc') {
          return activate(bsc)
        }

        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={languageList}
      setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd}
      cakePriceLink={`https://bscscan.com/token/${paniniAddress}`}
      /* profile={profile} */
      {...props}
    />
  )
}

export default Menu
