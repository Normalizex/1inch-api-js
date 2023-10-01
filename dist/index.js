"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InchSwapApi = exports.InchChains = exports.InchV5Chains = exports.InchV4Chains = void 0;
var axios_1 = __importDefault(require("axios"));
/**
 * @readonly
 * @enum {number}
*/
exports.InchV4Chains = {
    Ethereum: 1,
    BinanceSmartChain: 56,
    Polygon: 137,
    Optimism: 10,
    Arbitrum: 42161,
    Gnosis: 100,
    Avalanche: 43114,
    Fantom: 250
};
exports.InchV5Chains = exports.InchV4Chains;
exports.InchChains = exports.InchV4Chains;
/**
 * @class InchSwapApi
 * @constructor
 * @public
 */
var InchSwapApi = /** @class */ (function () {
    /**
     * @param chainId - while the transaction signature process uses the chain ID. (eth - 1 | bsc - 56)
    */
    function InchSwapApi(chainId, apikey, params) {
        if (params === void 0) { params = { domain: 'https://api.1inch.dev' }; }
        var _this = this;
        /**
         * @returns Always returns code 200 if API is stable
        */
        this.healtcheck = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, axios_1.default.get("".concat(this._baseUrl, "/healthcheck"), { headers: this.authenticate() }).then(function (res) { return res.data; })];
            });
        }); };
        /**
         * @returns Address of the 1inch router that must be trusted to spend funds for the exchange
        */
        this.approveSpender = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, axios_1.default.get("".concat(this._baseUrl, "/approve/spender"), { headers: this.authenticate() }).then(function (res) { return res.data.address; })];
            });
        }); };
        /**
         * @param tokenAddress - Token address you want to exchange
         * @param amount - The number of tokens that the 1inch router is allowed to spend.If not specified, it will be allowed to spend an infinite amount of tokens. **Example : 100000000000**
         * @returns Generate data for calling the contract in order to allow the 1inch router to spend funds
        */
        this.approveTransaction = function (tokenAddress, amount) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, axios_1.default.get("".concat(this._baseUrl, "/approve/transaction"), {
                        params: { tokenAddress: tokenAddress, amount: amount },
                        headers: this.authenticate()
                    }).then(function (res) { return res.data; })];
            });
        }); };
        /**
         * @param tokenAddress - Token address you want to exchange
         * @param walletAddress - Wallet address for which you want to check
         * @returns The number of tokens that the 1inch router is allowed to spend
        */
        this.allowance = function (tokenAddress, walletAddress) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, axios_1.default.get("".concat(this._baseUrl, "/approve/allowance"), {
                        params: { tokenAddress: tokenAddress, walletAddress: walletAddress },
                        headers: this.authenticate()
                    }).then(function (res) { return res.data.allowance; })];
            });
        }); };
        /**
         * @returns List of liquidity sources that are available for routing in the 1inch Aggregation protocol
        */
        this.liquiditySources = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, axios_1.default.get("".concat(this._baseUrl, "/liquidity-sources"), { headers: this.authenticate() }).then(function (res) { return res.data.protocols; })];
            });
        }); };
        /**
         * @returns List of tokens that are available for swap in the 1inch Aggregation protocol
        */
        this.tokens = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, axios_1.default.get("".concat(this._baseUrl, "/tokens"), { headers: this.authenticate() }).then(function (res) { return Object.values(res.data.tokens); })];
            });
        }); };
        /**
         * @returns Object of preset configurations for the 1inch router
        */
        this.presets = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, axios_1.default.get("".concat(this._baseUrl, "/presets"), { headers: this.authenticate() }).then(function (res) { return res.data; })];
            });
        }); };
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
        this.quote = function (fromTokenAddress, toTokenAddress, amount, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, axios_1.default.get("".concat(this._baseUrl, "/quote"), {
                            params: __assign({ fromTokenAddress: fromTokenAddress, toTokenAddress: toTokenAddress, amount: amount }, options),
                            headers: this.authenticate()
                        }).then(function (res) { return res.data; })];
                });
            });
        };
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
        this.swap = function (fromTokenAddress, toTokenAddress, amount, fromAddress, slippage, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, axios_1.default.get("".concat(this._baseUrl, "/swap"), {
                            params: __assign({ fromTokenAddress: fromTokenAddress, toTokenAddress: toTokenAddress, amount: amount, fromAddress: fromAddress, slippage: slippage }, options),
                            headers: this.authenticate()
                        }).then(function (res) { return res.data; })];
                });
            });
        };
        this.chain = function () { return _this._chainId; };
        /**
         * @param chainId - while the transaction signature process uses the chain ID. (eth - 1 | bsc - 56)
         * @description Switch chain to other
        */
        this.swithChain = function (chainId) {
            if (isNaN(Number(chainId)))
                throw new Error('Invlid chainId');
            _this._chainId = Number(chainId);
            _this._baseUrl = "".concat(_this._domain, "/swap/v5.2/").concat(_this._chainId);
        };
        this.setApikey = function (newApikey) {
            _this._apikey = newApikey;
        };
        if (isNaN(Number(chainId)))
            throw new Error('Invlid chainId');
        this._apikey = apikey || "";
        this._chainId = Number(chainId);
        this._domain = params.domain;
        this._baseUrl = "".concat(this._domain, "/swap/v5.2/").concat(this._chainId);
    }
    InchSwapApi.prototype.authenticate = function () {
        return {
            accept: 'application/json',
            Authorization: "Bearer ".concat(this._apikey)
        };
    };
    return InchSwapApi;
}());
exports.InchSwapApi = InchSwapApi;
;
exports.default = InchSwapApi;
//# sourceMappingURL=index.js.map