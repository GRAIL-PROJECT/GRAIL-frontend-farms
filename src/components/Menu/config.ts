import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://grail-project.github.io/exchange/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://grail-project.github.io/exchange/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },

  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'SushiSwap',
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },

  //    {
  //      label: 'AstroTools',
  //      href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //    },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/GRAIL-PROJECT/GRAIL-PROJECT.github.io',
      },
      {
        label: 'Docs',
        href: 'https://github.com/GRAIL-PROJECT/GRAIL-PROJECT.github.io',
      },
      {
        label: 'Blog',
        href: 'https://github.com/GRAIL-PROJECT/GRAIL-PROJECT.github.io',
      },
    ],
  },


]

export default config
