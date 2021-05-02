import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'AVS-USDC LP',
    lpAddresses: {

      4: '0x7Ec9Fb6c0588B8d3b784475532A993cD53a95C0A',
    },
    tokenSymbol: 'GRAIL',
    tokenAddresses: {

      4: '0x2325859CE282100606dC43AD9A0f265D453cA968',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'AVS-ETH LP',
    lpAddresses: {
   
      4: '0xfF6a95B4e28e9d8db0146E03836dC1FCF64b6Bd0',
    },
    tokenSymbol: 'GRAIL',
    tokenAddresses: {

      4: '0x2325859CE282100606dC43AD9A0f265D453cA968',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'GRAIL-AVS LP',
    lpAddresses: {

      4: '0x8415A3824Af3BD1837512156F671DE118A8EC92F',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {

      4: '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

]

export default farms
