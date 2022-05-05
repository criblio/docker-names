# How to Release a New Version of This Repo

After the main branch of the repository contains all updates that will be pushed out
complete the following steps to release a new version:

1. Run `npm run build`
2. Run `npm run release`
    1. Select the appropriate version to be released.
    2. Ensure that all checsk pass successfully. 

Cloud specific:
1. Create a new branch off https://bitbucket.org/cribl/cribl-cloud/src/master/
2. Updated package.json to have the correct version in
3. Run `pnpm install`
