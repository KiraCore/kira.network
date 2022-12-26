## www.kira.network

Release static page to IPFS

### Overview

1. The [base docker image](ghcr.io/kiracore/docker/base-image:v0.12.2) with preinstalled chromedriver is launched
2. Our [custom ipfs-api](https://github.com/KiraCore/tools/tree/main/ipfs-api) tool communicates with pinata to upload the root folder
3. A redirection HTML page is generated with embedded CID hash to a dedicated `<branch>-release` branch
4. Github pages are configured to launch redirection HTML

### How to use this ?

* Make a commit to `dev` repository
* Push changes
* Await github actions to finalize
* Website gets deployed to IPFS : ) 
* PR is automatically raised to `master` with test links to IPFS gateway
* If you are satisfied with the release merge the PR