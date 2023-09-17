import TokenData from './types/Token';
import { QuoteParams, QuoteResponse, SwapParams, SwapResponse } from './types/InchApi';
/**
 * @readonly
 * @enum {number}
*/
export declare const InchV4Chains: {
    Ethereum: number;
    BinanceSmartChain: number;
    Polygon: number;
    Optimism: number;
    Arbitrum: number;
    Gnosis: number;
    Avalanche: number;
    Fantom: number;
};
export declare const InchV5Chains: {
    Ethereum: number;
    BinanceSmartChain: number;
    Polygon: number;
    Optimism: number;
    Arbitrum: number;
    Gnosis: number;
    Avalanche: number;
    Fantom: number;
};
export declare const InchChains: {
    Ethereum: number;
    BinanceSmartChain: number;
    Polygon: number;
    Optimism: number;
    Arbitrum: number;
    Gnosis: number;
    Avalanche: number;
    Fantom: number;
};
/**
 * @class InchSwapApi
 * @constructor
 * @public
 */
export declare class InchSwapApi {
    private _chainId;
    private _apikey;
    private _baseUrl;
    /**
     * @returns Always returns code 200 if API is stable
    */
    healtcheck: () => Promise<{
        status: string;
    }>;
    /**
     * @returns Address of the 1inch router that must be trusted to spend funds for the exchange
    */
    approveSpender: () => Promise<string>;
    /**
     * @param tokenAddress - Token address you want to exchange
     * @param amount - The number of tokens that the 1inch router is allowed to spend.If not specified, it will be allowed to spend an infinite amount of tokens. **Example : 100000000000**
     * @returns Generate data for calling the contract in order to allow the 1inch router to spend funds
    */
    approveTransaction: (tokenAddress: string, amount?: string | number) => Promise<{
        data: string;
        gasPrice: string;
        to: string;
        value: string;
    }>;
    /**
     * @param tokenAddress - Token address you want to exchange
     * @param walletAddress - Wallet address for which you want to check
     * @returns The number of tokens that the 1inch router is allowed to spend
    */
    allowance: (tokenAddress: string, walletAddress: string) => Promise<string>;
    /**
     * @returns List of liquidity sources that are available for routing in the 1inch Aggregation protocol
    */
    liquiditySources: () => Promise<{
        id: string;
        title: string;
        img: string;
    }[]>;
    /**
     * @returns List of tokens that are available for swap in the 1inch Aggregation protocol
    */
    tokens: () => Promise<TokenData[]>;
    /**
     * @returns Object of preset configurations for the 1inch router
    */
    presets: () => Promise<{
        [param: string]: any;
    }>;
    /**
     * @description Find the best quote to exchange via 1inch router
     * @remarks
     * **Options:**
     * - protocols - default: all
     * - fee - Min: 0; max: 3; Max: 0; max: 3; default: 0
     * - gasLimit - ammount in units
     * - connectorTokens - max: 5
     * - complexityLevel - min: 0; max: 3; default: 2
     * - mainRouteParts - default: 10; max: 50
     * - parts - split parts. default: 50; max: 100
     * - gasPrice - default: fast from network
     * ***
     * **One of the following errors:**
     * - Insufficient liquidity
     * - Cannot estimate
     * - You may not have enough ETH balance for gas fee
     * - FromTokenAddress cannot be equals to toTokenAddress
     * - Cannot estimate. Don't forget about miner fee. Try to leave the buffer of ETH for gas
     * - Not enough balance
     * - Not enough allowance
     * @param fromTokenAddress  - Example: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE
     * @param toTokenAddress - Example: 0x111111111117dc0aa78b770fa6a738034120c302
     * @param amount - In token UNITS (amount * (10 ** tokenDecimals)) Example : 10000000000000000
     * @param options - Full info about options you can find in "remarks"
    */
    quote: (fromTokenAddress: string, toTokenAddress: string, amount: string | number, options?: QuoteParams) => Promise<QuoteResponse>;
    /**
     * @description Generate data for calling the 1inch router for exchange
     * @remarks
     * **Options:**
     * - protocols - default: all
     * - destReceiver - Receiver of destination currency. default: fromAddress;
     * - referrerAddress - string
     * - fee - Min: 0; max: 3; Max: 0; max: 3; default: 0
     * - gasLimit - ammount in units
     * - disableEstimate -
     * - permit - https://eips.ethereum.org/EIPS/eip-2612
     * - burnChi - default: false;` *Suggest to check user's balance and allowance before set this flag; CHI should be approved to spender address*
     * - allowPartialFill - default: false
     * - parts - split parts. default: 50; max: 100
     * - connectorTokens - max: 5
     * - complexityLevel - min: 0; max: 3; default: 2
     * - mainRouteParts - default: 10; max: 50
     * - gasPrice - default: fast from network
     * ***
     * **One of the following errors:**
     * - Insufficient liquidity
     * - Cannot estimate
     * - You may not have enough ETH balance for gas fee
     * - FromTokenAddress cannot be equals to toTokenAddress
     * - Cannot estimate. Don't forget about miner fee. Try to leave the buffer of ETH for gas
     * - Not enough balance
     * - Not enough allowance
     * @param fromTokenAddress  - Example: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE
     * @param toTokenAddress  - Example: 0x111111111117dc0aa78b770fa6a738034120c302
     * @param amount  - In token UNITS (amount * (10 ** tokenDecimals)) Example : 10000000000000000
     * @param fromAddress - The address that calls the 1inch contract
     * @param slippage - min: 0; max: 50; (Percentage)
     * @param options - Full info about options you can find in "remarks"
    */
    swap: (fromTokenAddress: string, toTokenAddress: string, amount: string | number, fromAddress: string, slippage: string | number, options?: SwapParams) => Promise<SwapResponse>;
    chain: () => number;
    /**
     * @param chainId - while the transaction signature process uses the chain ID. (eth - 1 | bsc - 56)
     * @description Switch chain to other
    */
    swithChain: (chainId: number | string) => void;
    setApikey: (newApikey: string) => void;
    private authenticate;
    /**
     * @param chainId - while the transaction signature process uses the chain ID. (eth - 1 | bsc - 56)
    */
    constructor(chainId: number | string, apikey?: string);
}
export default InchSwapApi;
