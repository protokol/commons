import { ApiQuery } from "@arkecosystem/client";

import { Timestamp } from "../../timestamp";

export interface Collections {
	id: string;
	senderPublicKey: string;
	name: string;
	description: string;
	maximumSupply: number;
	jsonSchema: object;
	allowedIssuers?: string[];
	metadata?: object;
	timestamp: Timestamp;
}

export interface AllCollectionsQuery extends ApiQuery {
	orderBy?: string;
	transform?: boolean;
}

export interface Schema {
	id: string;
	senderPublicKey: string;
	jsonSchema: object;
}

export interface CollectionsWallet {
	address: string;
	publicKey: string;
	nft: {
		collections: {
			collectionId: string;
			currentSupply: number;
			nftCollectionAsset: {
				name: string;
				description: string;
				maximumSupply: number;
				jsonSchema: object;
				allowedIssuers?: string[];
				metadata?: object;
			};
		}[];
		assetsIds: string[];
	};
}

export interface SearchCollectionsApiBody {
	[collection: string]: any;
}

export interface CollectionsAsset {
	id: string;
	ownerPublicKey: string;
	senderPublicKey: string;
	collectionId: string;
	attributes: object;
	timestamp: Timestamp;
}
