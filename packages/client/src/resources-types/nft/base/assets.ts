import { ApiQuery } from "@arkecosystem/client";

import { Timestamp } from "../../timestamp";

export interface Assets {
	id: string;
	ownerPublicKey: string;
	senderPublicKey: string;
	collectionId: string;
	attributes: object;
	timestamp: Timestamp;
}

export interface AssetsWallet {
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

export interface AllAssetsQuery extends ApiQuery {
	orderBy?: string;
	transform?: boolean;
}

export interface WalletAssetsQuery extends AllAssetsQuery {
	inAuction?: boolean;
	inExpiredAuction?: boolean;
}

export interface SearchAssetApiBody {
	[asset: string]: any;
}
