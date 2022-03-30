const token = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'previousAdmin',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'newAdmin',
                type: 'address',
            },
        ],
        name: 'AdminChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'approved',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'Approval',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'approved',
                type: 'bool',
            },
        ],
        name: 'ApprovalForAll',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'beacon',
                type: 'address',
            },
        ],
        name: 'BeaconUpgraded',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'id',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'name',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'currentGeneration',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'enum Rarity',
                name: 'rarity',
                type: 'uint8',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'dataContract',
                type: 'address',
            },
        ],
        name: 'DegenCreated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'Transfer',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'implementation',
                type: 'address',
            },
        ],
        name: 'Upgraded',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_name',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_symbol',
                type: 'string',
            },
        ],
        name: '_initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'maxSupply',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'mintPrice',
                                type: 'uint256',
                            },
                        ],
                        internalType: 'struct MintRule',
                        name: 'common',
                        type: 'tuple',
                    },
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'maxSupply',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'mintPrice',
                                type: 'uint256',
                            },
                        ],
                        internalType: 'struct MintRule',
                        name: 'rare',
                        type: 'tuple',
                    },
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'maxSupply',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'mintPrice',
                                type: 'uint256',
                            },
                        ],
                        internalType: 'struct MintRule',
                        name: 'mythic',
                        type: 'tuple',
                    },
                ],
                internalType: 'struct MintRules',
                name: '_newRules',
                type: 'tuple',
            },
        ],
        name: 'addGeneration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'balanceOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getApproved',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_id',
                type: 'uint256',
            },
        ],
        name: 'getDegenToken',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'generation',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'seed',
                        type: 'uint256',
                    },
                    {
                        internalType: 'enum Rarity',
                        name: 'rarity',
                        type: 'uint8',
                    },
                    {
                        internalType: 'contract DegenData',
                        name: 'dataContract',
                        type: 'address',
                    },
                ],
                internalType: 'struct DegenToken',
                name: '',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getMintRules',
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'maxSupply',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'mintPrice',
                                type: 'uint256',
                            },
                        ],
                        internalType: 'struct MintRule',
                        name: 'common',
                        type: 'tuple',
                    },
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'maxSupply',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'mintPrice',
                                type: 'uint256',
                            },
                        ],
                        internalType: 'struct MintRule',
                        name: 'rare',
                        type: 'tuple',
                    },
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'maxSupply',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'mintPrice',
                                type: 'uint256',
                            },
                        ],
                        internalType: 'struct MintRule',
                        name: 'mythic',
                        type: 'tuple',
                    },
                ],
                internalType: 'struct MintRules',
                name: '',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_renameCost',
                type: 'uint256',
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'maxSupply',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'mintPrice',
                                type: 'uint256',
                            },
                        ],
                        internalType: 'struct MintRule',
                        name: 'common',
                        type: 'tuple',
                    },
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'maxSupply',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'mintPrice',
                                type: 'uint256',
                            },
                        ],
                        internalType: 'struct MintRule',
                        name: 'rare',
                        type: 'tuple',
                    },
                    {
                        components: [
                            {
                                internalType: 'uint256',
                                name: 'maxSupply',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'mintPrice',
                                type: 'uint256',
                            },
                        ],
                        internalType: 'struct MintRule',
                        name: 'mythic',
                        type: 'tuple',
                    },
                ],
                internalType: 'struct MintRules',
                name: '_mintRules',
                type: 'tuple',
            },
            {
                internalType: 'address',
                name: '_degenDataFactory',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_payments',
                type: 'address',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'operator',
                type: 'address',
            },
        ],
        name: 'isApprovedForAll',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_name',
                type: 'string',
            },
            {
                internalType: 'enum Rarity',
                name: '_rarity',
                type: 'uint8',
            },
        ],
        name: 'mintDegen',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'name',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_owner',
                type: 'address',
            },
        ],
        name: 'ownedTokens',
        outputs: [
            {
                internalType: 'uint256[]',
                name: '',
                type: 'uint256[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'ownerOf',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'proxiableUUID',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'operator',
                type: 'address',
            },
            {
                internalType: 'bool',
                name: 'approved',
                type: 'bool',
            },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_worlds',
                type: 'address',
            },
        ],
        name: 'setWorldsAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4',
            },
        ],
        name: 'supportsInterface',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'symbol',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
            },
        ],
        name: 'tokenByIndex',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
            },
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'tokenURI',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newImplementation',
                type: 'address',
            },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newImplementation',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
            },
        ],
        name: 'upgradeToAndCall',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
]

export default token
