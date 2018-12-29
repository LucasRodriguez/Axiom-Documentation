# Axioms Platform Documentation
This repository serves as a reference point regarding the operation, functioning, limitations, and capabilities for the Axioms network.
It can be assumed that if the feature you're looking for is not covered here its not yet supported or it only exists in beta.
>**NOTE:**
> This repository reflects the state of the latest update and its only updated on each __NEW__ release. So don't expect to track inter-version progress here as we dont support it.
## Table of Contents
## Table of Contents
- [Type of Air Drops Supported](https://github.com/LucasRodriguez/Axiom-Documentation#Type-of-Air-Drops-Supported)
- [Features Supported](https://github.com/LucasRodriguez/Axiom-Documentation#Features-Supported)
- [Progress](https://github.com/LucasRodriguez/Axiom-Documentation#Versions-&-Features)
  - [Smart contract tracking saving and distribution](https://github.com/LucasRodriguez/Axiom-Documentation#Smart-contract-tracking-saving-and-distribution)
  - [Social media tracking](https://github.com/LucasRodriguez/Axiom-Documentation#Social-media-track)
  - [Referrals](https://github.com/LucasRodriguez/Axiom-Documentation#Referrals)
  - [Social Media Influencer Program](https://github.com/LucasRodriguez/Axiom-Documentation#Social-Media-Influencer-Program)
  - [Ranks & Hierarchy](https://github.com/LucasRodriguez/Axiom-Documentation#Ranks-&-Hierarchy)
  - [Token Economics](https://github.com/LucasRodriguez/Axiom-Documentation#Token-Economics)
  - [Network Support](https://github.com/LucasRodriguez/Axiom-Documentation#Network-Support)
- [How It Works](https://github.com/LucasRodriguez/Axiom-Documentation#How-It-Works)
- [Versions & Features](https://github.com/LucasRodriguez/Axiom-Documentation#Versions-&-Features)


### Type of Air Drops Supported
1. [x] ERC20 Smart Contracts
2. [ ] Non-Collateralised - Unique Chain
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
9. [ ] Partners
   - [ ] Play Key Toke
   - [ ] Receipt Chain Token

### How It Works
#### ERC20
The airdrop distribution method for erc20 tokens is via the Axioms smart contract. The airdrop creator inputs both the erc20 tokens for distribution and an appropriate amount of Ethereum to cover the gas fees involved in the airdrop. These tokens are held securely in the smart contract in which the Axioms team has no direct control over the funds regarding distribution.
Once the tokens are in the smart contract, and the airdrop campaign ends, the smart contract will send all claimed tokens to the respective Axioms user. Remaining unclaimed tokens, if any, are returned to the sending Ethereum address.

### Progress
#### Smart contract tracking saving and distribution
Purpose: to track, limit, and enable, distribution of Air Drops.
The smart contract will require Air Drops to be created on chain, and require to know the `Amount`, `Name`, `Smart Contract` & `Expiry date`, with this information, a centralised database with all the addresses and the amount they are owed for completing the social media tasks, coupled with `kue`. Any one can deploy an Air Drop and ensure distribution within the Ethereum network. How ever the distribution is limited by the Ethereum network, since airdrops can t be distributed till a certain block is reached.

#### Social media tracking
Axioms is connected to a centralised database which routinely calls the Discord, Telegram, and Twitter API. This calls determine which users have completed which tasks.  

#### Referrals
In Air Drop referrals rewards any user that arrives to the platform through a referral link whether registered or not with extra tokens. Referrals are required for now as a way to incentivize growth of the platform.
Referrals are limited per user, and the limit is determined by the Air Droppers.

#### Social Media Influencer Program
Social Media Influencer Program development has not yet started

#### Partner Referral Program
Partner Referral Program development has not yet started


#### Ranks & Hierarchy
Ranks & hierarchy development has not yet started

#### Token Economics
Token Economics are dependent on whether axiom manages to raise a seed fund.

##### Use
Axioms Will have use cases that range from **Collateral** to **Governance** going all the way to a **Utility** when Axioms becomes the only way to pay for the Air Drops in the platform.

##### Distribution
There is no set date for the distribution of Axioms(AXM) tokens.

#### Network Support
##### Ethereum
Ethereum is currently the only fully supported chain.

### Versions & Features
>#### v. 1.0.0 - First working version of the platform
>##### Platform
>- Basic Social Media Tracking based on a routine 5 minute server update
>- Referrals for each Air Drop uniquely
>- Account connection to Social Media
>  - Twitter
>  - Discord
>  - Telegram
>##### Admin Side
>- Creation of basic ERC20 Airdrop
>  - No decimal support
>  - 12 input fields
>  - Smart Contract for custody
>  - Manual distribution through smart contract function for batching
>- Support for Social media
>  - Twitter
>    - Like
>    - Retweet
>    - Follow
>  - Telegram
>  - Discord
>- Web3 Integration
>- Step by Step Tutorial
>- Air Drop Card Preview
>- Real Time Tracking of Air Drop progress
