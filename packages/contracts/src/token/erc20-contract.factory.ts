import { MulticallProviderBase } from '@ethereum-multicall/provider'
import type {
  MethodCall,
  ContractDetail,
  MulticallProviderContext,
  Erc20Contract,
  ContractTransactionOverrides,
  ContractDetailToken,
  ContractContextOptions,
  ContractResults,
  DiscriminatedMethodCalls,
  MethodNames,
} from '@ethereum-multicall/types'
import {
  MulticallError,
  ErrorCodes,
  defaultErc20MethodMap,
  erc20ABI,
} from '@ethereum-multicall/utils'
import type { BigNumber, BigNumberish, ContractTransaction } from 'ethers'

export class Erc20ContractFactory
  extends MulticallProviderBase
  implements Erc20Contract.Contract
{
  protected _contractDetail: ContractDetail

  protected _contract: Erc20Contract.ContractContext

  protected _methodNames: Erc20Contract.MethodNameMap

  constructor(
    multicallProviderContext: MulticallProviderContext,
    contractDetail: ContractDetailToken,
  ) {
    super(multicallProviderContext)

    if (!contractDetail) {
      throw new MulticallError(
        'contractDetail is required',
        ErrorCodes.functionArgumentError,
      )
    }

    if (!contractDetail.address) {
      throw new MulticallError(
        'Contract address not found',
        ErrorCodes.contractAddressNotFound,
      )
    }

    this._contractDetail = {
      ...contractDetail,
      abi: contractDetail.abi || erc20ABI,
    }

    this._contract =
      this._multicallProvider.getContract<Erc20Contract.ContractContext>(
        this._contractDetail,
      )

    this._methodNames = {
      ...defaultErc20MethodMap,
      ...this._contractDetail.methods,
    }
  }

  /** Get the contract detail */
  public get contractDetail(): ContractDetail {
    return this._contractDetail
  }

  /** Get the ERC20 contract */
  public get erc20Contract(): Erc20Contract.ContractContext {
    return this._contract
  }

  /** Get the method names */
  public get methodNames(): Erc20Contract.MethodNameMap {
    return this._methodNames
  }

  /**
   * Helper function to dynamically invoke a contract method based on custom or default method names.
   * @param methodName - The name of the method to invoke.
   * @param values - An array of values to pass as arguments to the method.
   * @returns The result of the contract method invocation with the appropriate return type.
   */
  protected async callContractMethod<T>(
    methodName: Erc20Contract.MethodNames,
    values?: any[],
  ): Promise<T> {
    const contractMethodName = this._methodNames[
      methodName
    ] as keyof Erc20Contract.ContractContext

    if (typeof this._contract[contractMethodName] === 'function') {
      return (this._contract[contractMethodName] as any)(...(values || []))
    } else {
      throw new MulticallError(
        `Method ${methodName} does not exist on the contract`,
        ErrorCodes.functionArgumentError,
      )
    }
  }

  /**
   * Encodes the function data for the given method name, using custom method names if provided in the contract detail.
   * @param methodName - The method name.
   * @param values - The values to encode.
   * @returns The encoded function data.
   */
  protected encodeFunctionData(
    methodName: Erc20Contract.MethodNames,
    values?: any[],
  ): string {
    return this._contract.interface.encodeFunctionData(
      this._methodNames[methodName] as Erc20Contract.MethodNames,
      values,
    )
  }

  /**
   * Helper function to dynamically prepare a call context based on custom or default method names.
   * @param methodName - The name of the method to invoke.
   * @param methodParameters - The method parameters.
   * @returns The call context.
   */
  protected prepareCallContext<TMethod extends keyof Erc20Contract.Contract>(
    methodName: TMethod,
    methodParameters: any[] = [],
  ): MethodCall<Erc20Contract.Contract, TMethod> {
    const contractMethodName = this._methodNames[
      methodName
    ] as keyof Erc20Contract.Contract

    if (typeof this._contract[contractMethodName] === 'function') {
      return {
        methodName,
        methodParameters: methodParameters ?? [],
      } as MethodCall<Erc20Contract.Contract, TMethod>
    } else {
      throw new MulticallError(
        `Method ${String(methodName)} does not exist on the contract`,
        ErrorCodes.functionArgumentError,
      )
    }
  }

  /**
   * Executes a multicall for the given contract methods.
   *
   * @template TCalls - The type of the calls object.
   *
   * @param calls - An object describing the methods to call and their parameters.
   * @param options - Optional configuration for the contract call.
   * @returns A promise that resolves to an object containing the block number,
   *          origin context, and the results of each method call.
   *
   * @remarks
   * This method allows batch calling of multiple contract methods in a single transaction.
   * It uses the multicall provider to execute all calls efficiently.
   * The results are typed according to the return types of the called methods.
   */
  async call<
    TCalls extends Record<
      string,
      DiscriminatedMethodCalls<Erc20Contract.Contract>[MethodNames<Erc20Contract.Contract>]
    >,
  >(
    calls: TCalls,
    options: ContractContextOptions = {},
  ): Promise<{
    blockNumber: number
    originContext: ContractResults<
      Erc20Contract.Contract,
      TCalls
    >['originContext']
    results: ContractResults<Erc20Contract.Contract, TCalls>['results']
  }> {
    return super.multicall<Erc20Contract.Contract, TCalls>(calls, options)
  }

  /**
   * Returns the name of the token.
   * @returns The name of the token.
   */
  public async name(): Promise<string> {
    return this.callContractMethod<string>('name')
  }

  /**
   * Returns the call context for the name method.
   * @returns The call context.
   */
  public nameCallContext(): MethodCall<Erc20Contract.Contract, 'name'> {
    return this.prepareCallContext('name', [])
  }

  /**
   * Approves the specified amount of tokens to the specified address.
   * @param _spender - The address to approve.
   * @param _value - The amount of tokens to approve.
   * @param overrides - Optional transaction overrides.
   * @returns The contract transaction.
   */
  public async approve(
    _spender: string,
    _value: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction> {
    return this.callContractMethod<ContractTransaction>('approve', [
      _spender,
      _value,
      overrides,
    ])
  }

  /**
   * Encodes the function data for approving tokens.
   * @param _spender - The address to approve.
   * @param _value - The amount of tokens to approve.
   * @returns The encoded function data.
   */
  public encodeApprove(_spender: string, _value: BigNumberish): string {
    return this.encodeFunctionData('approve', [_spender, _value])
  }

  /**
   * Returns the total supply of the token.
   * @returns The total supply of the token.
   */
  public async totalSupply(): Promise<BigNumber> {
    return this.callContractMethod<BigNumber>('totalSupply', [])
  }

  /**
   * Returns the call context for the totalSupply method.
   * @returns The call context.
   */
  public totalSupplyCallContext(): MethodCall<
    Erc20Contract.Contract,
    'totalSupply'
  > {
    return this.prepareCallContext('totalSupply', [])
  }

  /**
   * Transfers tokens from one address to another.
   * @param _from - The source address.
   * @param _to - The destination address.
   * @param _value - The amount of tokens to transfer.
   * @param overrides - Optional transaction overrides.
   * @returns The contract transaction.
   */
  public async transferFrom(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction> {
    return this.callContractMethod<ContractTransaction>('transferFrom', [
      _from,
      _to,
      _value,
      overrides,
    ])
  }

  /**
   * Encodes the function data for transferring tokens from one address to another.
   * @param _from - The source address.
   * @param _to - The destination address.
   * @param _value - The amount of tokens to transfer.
   * @returns The encoded function data.
   */
  public encodeTransferFrom(
    _from: string,
    _to: string,
    _value: BigNumberish,
  ): string {
    return this.encodeFunctionData('transferFrom', [_from, _to, _value])
  }

  /**
   * Returns the number of decimals used by the token.
   * @returns The number of decimals.
   */
  public async decimals(): Promise<number> {
    return this.callContractMethod<number>('decimals', [])
  }

  /**
   * Returns the call context for the decimals method.
   * @returns The call context.
   */
  public decimalsCallContext(): MethodCall<Erc20Contract.Contract, 'decimals'> {
    return this.prepareCallContext('decimals', [])
  }

  /**
   * Returns the balance of the specified address.
   * @param _owner - The address to query.
   * @returns The balance of the specified address.
   */
  public async balanceOf(_owner: string): Promise<BigNumber> {
    return this.callContractMethod<BigNumber>('balanceOf', [_owner])
  }

  /**
   * Returns the call context for the balanceOf method.
   * @param _owner - The address to query.
   * @returns The call context.
   */
  public balanceOfCallContext(
    _owner: string,
  ): MethodCall<Erc20Contract.Contract, 'balanceOf'> {
    return this.prepareCallContext('balanceOf', [_owner])
  }

  /**
   * Returns the symbol of the token.
   * @returns The symbol of the token.
   */
  public async symbol(): Promise<string> {
    return this.callContractMethod<string>('symbol', [])
  }

  /**
   * Returns the call context for the symbol method.
   * @returns The call context.
   */
  public symbolCallContext(): MethodCall<Erc20Contract.Contract, 'symbol'> {
    return this.prepareCallContext('symbol', [])
  }

  /**
   * Transfers tokens to a specified address.
   * @param _to - The address to transfer to.
   * @param _value - The amount of tokens to transfer.
   * @param overrides - Optional transaction overrides.
   * @returns The contract transaction.
   */
  public async transfer(
    _to: string,
    _value: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction> {
    return this.callContractMethod<ContractTransaction>('transfer', [
      _to,
      _value,
      overrides,
    ])
  }

  /**
   * Encodes the function data for transferring tokens to a specified address.
   * @param _to - The address to transfer to.
   * @param _value - The amount of tokens to transfer.
   * @returns The encoded function data.
   */
  public encodeTransfer(_to: string, _value: BigNumberish): string {
    return this.encodeFunctionData('transfer', [_to, _value])
  }

  /**
   * Returns the amount of tokens that an owner allowed to a spender.
   * @param _owner - The address of the owner.
   * @param _spender - The address of the spender.
   * @returns The amount of tokens that are allowed to be spent.
   */
  public async allowance(_owner: string, _spender: string): Promise<BigNumber> {
    return this.callContractMethod<BigNumber>('allowance', [_owner, _spender])
  }

  /**
   * Returns the call context for the allowance method.
   * @param _owner - The address of the owner.
   * @param _spender - The address of the spender.
   * @returns The call context.
   */
  public allowanceCallContext(
    _owner: string,
    _spender: string,
  ): MethodCall<Erc20Contract.Contract, 'allowance'> {
    return this.prepareCallContext('allowance', [_owner, _spender])
  }
}
