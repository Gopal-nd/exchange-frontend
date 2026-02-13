import Footer from "@/components/Footer"
import HighLightCards from "@/components/LandingPage/HighLightCards"
import HomeCarousel from "@/components/LandingPage/HomeCarousel"
import MarketList from "@/components/LandingPage/MarketList"
import { Market } from "@/types"
import axios from "axios"

const HomePage = async () => {

  async function getCurrentData(): Promise<Market[]> {
    const res = await axios.get("https://price-indexer.workers.madlads.com/?ids=zero-gravity,doublezero,aave,act-i-the-ai-prophecy,cardano,aerodrome-finance,ai16z,anime,apecoin,apex-token-2,apriori,aptos,arbitrum,aster-2,aethir,avalanche-2,avantis,lombard-protocol,bitcoin-cash,berachain-bera,bluefin,blur,binancecoin,jeo-boden,book-of-meme,bonk,bitcoin,cetus-protocol,chill-guy,sanctum-2,curve-dao-token,debridge,deep,dogecoin,polkadot,drift-protocol,openeden,eigenlayer,ethena,eclipse-3,ethereum,ether-fi,euro-coin,fartcoin,falcon-finance-ff,flock-2,fogo,fragmetric,fantom,gala,galaxy-digital-inc-class-a-common-stock,goatseus-maximus,gusdt,habibi-sol,haedal,hedera-hashgraph,holograph,helium,hivemapper,huma-finance,hyperliquid,infinex-2,io,story-2,jambo,jito-governance-token,jupiter-exchange-solana,kaito,kgen,kamino,solayer,lido-dao,linea,chainlink,lighter,litecoin,maneki,matic-network,matr1x,magic-eden,melania-meme,meteora,cat-in-a-dogs-world,mantle,helium-mobile,monad,mon-protocol,moo-deng,morpho,mother-iggy,movement,near,suins-token,nyan,ondo-finance,optimism,orderly-network,pax-gold,pendle,pudgy-penguins,pepe,pipe-network,peanut-the-squirrel,polygon-ecosystem-token,parcl,pump-fun,pyth-network,paypal-usd,raydium,render-token,rainbow-3-2,roam-token,sonic-3,sei-network,suilend,sharky-fi,shuffle-2,shiba-inu,seeker,solana,sonic-svm,spx6900,stable-2,starknet,sui,switchboard,bittensor,celestia,tensor,the-open-network,official-trump,tron,unagi-token,uniswap,usd-coin,tether,vine,virtual-protocol,wormhole,walrus-2,connect-token-wct,wen-4,the-white-whale,dogwifcoin,worldcoin-wld,world-liberty-financial,tether-gold,stellar,monero,plasma,ripple,zama,zcash,zeus-network,zeta,polyhedra-network,zora,layerzero?sparkline=true")
    return res.data
  }
  const data = await getCurrentData()
  return (
    <div className="bg-base-background-l0 text-high-emphasis flex flex-1 flex-col justify-between overflow-auto">
      <div className="flex flex-col flex-1 gap-8 ">
        <div className="flex flex-col mx-auto w-full max-w-7xl flex-1 gap-4  px-3 sm:px-6">
          <HomeCarousel />
          <HighLightCards data={data} />
          <MarketList data={data} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
