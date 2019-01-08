# Axioms Platform Documentation
This repository serves as a reference point regarding the operation, functioning, limitations, and capabilities for the Axioms network.
Only features active in the platform, or in active development planning, are listed here. Features being worked on in closed, staging areas are not listed.

>**NOTE:**
> This repository reflects the state of the latest update and its only updated on each __NEW__ release.

## Table of Contents
- [Type of Airdrops Supported](https://github.com/LucasRodriguez/Axiom-Documentation#Type-of-Air-Drops-Supported)
- [Features Supported](https://github.com/LucasRodriguez/Axiom-Documentation#Features-Supported)
- [How It Works](https://github.com/LucasRodriguez/Axiom-Documentation#How-It-Works)
- [Progress](https://github.com/LucasRodriguez/Axiom-Documentation#Progress)
  - [Smart contract tracking saving and distribution](https://github.com/LucasRodriguez/Axiom-Documentation#Smart-contract-tracking-saving-and-distribution)
  - [Social media tracking](https://github.com/LucasRodriguez/Axiom-Documentation#Social-media-tracking)
  - [Referrals](https://github.com/LucasRodriguez/Axiom-Documentation#Referrals)
  - [Social Media Influencer Program](https://github.com/LucasRodriguez/Axiom-Documentation#Social-Media-Influencer-Program)
  - [Ranks & Hierarchy](https://github.com/LucasRodriguez/Axiom-Documentation#Ranks-and-Hierarchy)
  - [Token Economics](https://github.com/LucasRodriguez/Axiom-Documentation#Token-Economics)
  - [Network Support](https://github.com/LucasRodriguez/Axiom-Documentation#Network-Support)
- [Versions & Features](https://github.com/LucasRodriguez/Axiom-Documentation/Versions/VersionFeatures.md)


### Type of Airdrops Supported
1. [x] ERC20 Smart Contracts
2. [x] Non-Collateralised - Unique Chain
3. [ ] Collateralised - Unique Chain

### Features Supported
1. [x] Smart contract tracking saving and distribution
2. [x] Social media tracking
3. [ ] Referrals
   - [x] In-drop Referrals
   - [ ] Partner Referrals
4. [ ] Social Media Influencer Program
5. [ ] Ranks & Hierarchy
6. [ ] Token Economics
   - [ ] Use
   - [ ] Distribution
7. [ ] Governance
8. [ ] Network Support
   - [x] Ethereum
   - [ ] TOMO
   - [ ] GoChain
   - [ ] Tron
   - [ ] IOTA
   - [ ] EOS
9. [ ] Partners
   - [x] PlayKey Token
   - [x] ReceiptChain Token

### How It Works
#### ERC20
The airdrop distribution method for erc20 tokens is via the Axioms smart contract. The airdrop creator inputs both the erc20 tokens for distribution and an appropriate amount of Ethereum to cover the gas fees involved in the airdrop. These tokens and Ethereum are held securely in the smart contract in which the Axioms team has no direct control over the funds regarding distribution.
Once the tokens are in the smart contract, and the airdrop campaign ends, the smart contract will send all claimed tokens to the respective Axioms user. Remaining unclaimed tokens, if any, are returned to the sending Ethereum address. The Ethereum for gas fees are spent based on the claimed tokens. Any unused Ethereum for gas fees is also returned to the sending Ethereum address.

### Progress
#### Smart contract tracking saving and distribution
Purpose: to track, limit, and enable, distribution of airdrops.
The smart contract will require airdrops to be created on chain and require to know the `Amount`, `Name`, `Smart Contract` & `Expiry date`, access to a centralised database with all the appropriate receiving addresses, and the amount they are owed for completing the social media tasks, coupled with `kue`. Anyone can deploy an airdrop and ensure distribution within the Ethereum network. The distribution is only limited by the Ethereum network whereby the airdrop awaits distribution untill a certain block is reached.

#### Social media tracking
Axioms is connected to a centralised database which routinely calls the Discord, Telegram, and Twitter API. These API calls determine which users have completed which tasks.  

#### Referrals
In-airdrop referrals rewards any user that arrives to the platform through a referral link, whether registered or not, with extra tokens. Referrals are required for now as a way to incentivize growth of the platform and encourage an exponential user-growth of individual airdrops. Referrals are limited per user, and the limit is determined by the airdrop creator.

#### Social Media Influencer Program
Social Media Influencer Program development has not yet started.

#### Partner Referral Program
Partner Referral Program development has not yet started.


#### Ranks and Hierarchy
Ranks & hierarchy development has not yet started.

#### Token Economics
Token Economics are dependent on a number of factors, such as funding opportunities for the development and obligatory needs of Axioms.

##### Use
Axioms will have use-cases that range from **Collateral**, **Governance**, to a **Utility** when Axioms becomes the way to pay for the airdrops in the platform.

##### Distribution
There is no set date for the distribution of Axioms(AXM) tokens.

#### Network Support
##### Ethereum
Ethereum is currently the only fully supported chain.
