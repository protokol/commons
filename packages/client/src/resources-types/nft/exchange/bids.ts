import { ApiQuery } from "@arkecosystem/client";

import { Timestamp } from "../../timestamp";

export interface Bids {
	id: string;
	senderPublicKey: string;
	nftBid: {
		auctionId: string;
		bidAmount: string;
		status?: "IN_PROGRESS" | "FINISHED" | "CANCELED" | "ACCEPTED";
	};
	timestamp: Timestamp;
}

export interface AllBidsQuery extends ApiQuery {
	orderBy?: string;
	transform?: boolean;
}

export interface BidsWallet {
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
				// eslint-disable-next-line @typescript-eslint/member-ordering
				[jsonSchema: string]: any;
			};
		}[];
		auctions: {
			auctionId: string;
			nftIds: string[];
			bids: string[];
		}[];
		lockedBalance: string;
	};
}

export interface SearchBidsApiBody {
	senderPublicKey?: string;
	auctionId?: string;
	bidAmount?: string;
}

export interface SearchBidsApiQuery extends ApiQuery {
	orderBy: string;
}

export interface BidCanceled {
	id: string;
	senderPublicKey: string;
	nftBidCancel: {
		bidId: string;
	};
	timestamp: Timestamp;
}

export interface AllBidsCanceledQuery extends ApiQuery {
	orderBy?: string;
	transform?: boolean;
}
