# SciFund - Decentralized Scientific Research Funding Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

SciFund is a revolutionary platform that connects innovative researchers with global supporters through transparent, efficient micro-project funding on the blockchain.

## Features

- **Micro-Project Crowdfunding**: Direct funding for small but critical research projects ($5-20K)
- **Web3 Authentication**: Secure wallet-based authentication system
- **Research Output NFTs**: Tokenization of research results with reward distribution
- **Smart Contract Integration**: Transparent fund management and reward distribution
- **Community-Driven Review**: Balanced expert opinions with collective wisdom

## Tech Stack

- **Frontend**: Next.js 13+, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Blockchain**: Ethereum, Solidity Smart Contracts
- **Authentication**: NextAuth.js with Web3
- **Storage**: IPFS for decentralized storage

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- MetaMask or other Web3 wallet

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SciFundDev/SciFund.git
cd SciFund
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update the environment variables with your configuration:
```env
NEXT_PUBLIC_RPC_URL=your_rpc_url
NEXT_PUBLIC_RESEARCH_OUTPUT_NFT_ADDRESS=your_contract_address
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_nextauth_secret
```

5. Run database migrations:
```bash
pnpm prisma migrate dev
```

6. Start the development server:
```bash
pnpm dev
```

## Smart Contracts

The platform utilizes the following smart contracts:

- `ResearchOutputNFT.sol`: Manages research output tokenization and reward distribution

### Contract Deployment

1. Configure deployment settings in `hardhat.config.ts`
2. Deploy contracts:
```bash
pnpm hardhat deploy --network your_network
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## Security

For security concerns, please check our security policy in the repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- Website: Coming soon 