/*
Using Infura & Web3

Require script to be able to

Input buyer public address
Input buyer private address
Input buy amount
Input gas
Input gasLimit
Input using which to buy (Default ETH / WETH? ) Which will be faster
Input contract code to buy (which token to buy)
Set max buy
Set slippage, default 5%
The script must be able to

Buy until input currency run out, able to set or reach the buy sum
Able to calculate gas + input sum, to do best buy
In general this script must be able to make purchase using cli with uniswap v2 interface.

Buy until condition met , either input currency finish or reach the max amount of token. If face error like uniswap x=y or so, able to change the buy sum by some such that it won't stuck.
*/
