# Distribution of Non-Collateralised-Airdrops
Axioms Platform aims for full decentralisation. There are some circumstances in which:
 - No token is created yet, for example in pre-sale airdrops
 - The airdrop is a coin protocol not yet supported by the smart contract of the platform

The airdrop distribution method for non-collaterized independent chain coins and tokens is via the airdrop creator themselves after the completion of the airdrop campaign. Since these coins and tokens are unable to be held in a smart contract on the Ethereum blockchain, Axioms and the Axioms team do not have a means to hold the coins or tokens on deposit/collateral for the duration of the airdrop. The Axioms platform does provide a means to connect the airdropper and end-user (airdrop hunter), as well as provide the distribution amounts to the airdropper based on the success of the campaign.

Upon completion of the airdrop campaign, Axioms provides the appropriate database information to the airdropper (wallet information of users and how many coins or tokens are to be distributed to the wallets). Axioms may also provide a coded script to assist in the distribution process of the coins or tokens to automate the process for the airdropper. 

Since the coins or tokens, in the non-collaterized airdrop method are held by the airdropper, Axioms and the Axioms team, is not responsible for the distribution, amounts distributed, or timing of the distribution. The airdropper assumes this responsibility, solely and in full. Airdrop participants assume this risk by participating in the airdrop.


## How to carry out a non ERC20 airdrop
We have tried to simplify the process as much as possible for projects. The form is accompanied by a tutorial, which will indicate to the person completing it what to fill out, and where it should be filled out.

After submitting the form, the person filling it out should reach out to Lucasxhy or Leaf, to discuss the project, and confirm its validity.

## How to distribute the airdrops
At the end of the airdrop we will calculate how many people have earned how many coins, and provide a csv file with emails, the appropriate coin addresses, and the amount to be distributed. This information can now be used to distribute the coins to the users. The project will have up to 15 days from the end of the airdrop campaign to complete the distribution.

The projects are welcomed to carry out their distribution however they see fit. Axioms recommends a quick option to all projects that have the function `sendmany` in their coin code can convert the csv into a function that match the function arguments like : `"from account" {"account":amount, ...}`

### How To use the script
To use The script, firstly, you should be using your choice of Linux. This script requires the following dependencies:
 - [node](https://nodejs.org/en/download/package-manager/)
 - [minimist](https://www.npmjs.com/package/minimist)

#### Instructions:
 1. Downlod the script
 2. Download the csv into the same folder as the script
 3. Open the Linux Terminal
 4. `cd` into the Directory containing the files
 5. Run: `node  NameOfScript.js --file=NameOfCSFfile.csv`
 6. This will create a file called output with your function
 7. Open The wallet from with you will be making the transfers
 8. Verify you have enough coins to distribute the entire amount
 9. Open the Debug console of your wallet and paste the output of the script
 10. Enter
 11. You should now see all the transfers in your console  and in your tx tab
