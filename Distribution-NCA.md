# Distribution of Non-Collateralised-Airdrops
Axiom Platform aims to cater for full decentralisation. However we understand that in some explicit cases like:
 - No token created yet for example in pre-sale airdrops
 - The airdrop is a coin not supported by the platform

Axioms can justify the use of the platform with out any warranties. The purpose of the platform is to facilitate main stream adoption of cryptocurrencies, and while we try to vet the projects that do airdrops we cant gurantee they will follow through.

## How to carry out a non ERC20 airdrop
We have tried to simplify the process as much as possible for projects. The form is accompanied by a tutorial which will indicate the person completing it what to fill out and where it should be filled out.

After submitting the form a member of the team should reach out to Lucasxhy or Leaf, to discuss the project, and confirm its validity.

## How to distribute the airdrops
At the end of the airdrop we will calculate how many people have earned how many coins, and provide a csv file with emails, your coin address and the amount to be distributed. This information can now be used to distribute the coins to the users. The project will have up to 15 days to complete the distribution.oo
The projects are welcomed to carry out their distribution how ever they see fit. Axioms recommends a quick option to all projects that have the function `sendmany` in their coin code can convert the csv into a function that match the function arguments like : `"from account" {"account":amount, ...}`

### How To use the script
To use The script firstly you should be using your choice of Linux. This script requires the following dependencies:
 - [node](https://nodejs.org/en/download/package-manager/)
 - [minimist](https://www.npmjs.com/package/minimist)

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
