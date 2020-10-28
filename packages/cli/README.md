![Img](cli.png)

# Protokol cli

A Protokol module providing command line utility for creating and broadcasting Protokol transactions.

## Source Install

### Source Code Setup

#### Install the dependencies

```bash
yarn
```

#### Run protokol cli

protokol cli has 4 commands:

-   send
-   list-wallets
-   save-wallets
-   help

To get general help use:

```bash
yarn node ./bin/run --help
```

It is possible to get help for each subcommand

-   `yarn node ./bin/run send --help`
-   `yarn node ./bin/run send:transfer --help`
-   `yarn node ./bin/run send:ipfs --help`
-   ...

For each subcommand check optional flags. Here is one run example

```bash
yarn node ./bin/run send:transfer -p="hurdle pulse sheriff anchor two hope income pattern hazard bacon book night" -q=2
```

# Contact Us For Support And Custom Development

info@protokol.com
