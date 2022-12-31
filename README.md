## // USER BE ADVISED THAT THIS GIT & SITE ARE FOR DEVELOPMENT PURPOSES //
>> CONTACT INFORMATION
- Twitter: @s0crates_eth

>> NOTES
- I have turned OFF the gitignore for the node_modules; this seems to have fixed the web3 connect issues, but im sure there is some way to 'import' these modules from where they originate -- to save space and improve performance
- I have NOT 'yarn deployed' yet, but this seems to cause no apparent issues















## Original MetaMask Notes

This is a simple test dapp for use in MetaMask e2e tests.

Currently hosted [here](https://metamask.github.io/test-dapp/).

>> NOTE: Requires Manual Deployment
After merging or pushing to `master`, please `yarn deploy` in the project root directory if any of the following files have changed:

- `contract.js`
- `index.html`
