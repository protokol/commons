import { flags } from "@oclif/command";

import { builders } from "../../builders";
import { TransactionType } from "../../enums";
import { SendBase } from "../../shared/send-base";

export default class NFTAcceptTrade extends SendBase {
	public static override description = SendBase.defaultDescription + builders[TransactionType.NFTAcceptTrade].name;
	public static override flags = {
		...SendBase.defaultFlags,
		auctionId: flags.string({ description: "Auction id" }),
		bidId: flags.string({ description: "Bid id" }),
	};

	public override type = TransactionType.NFTAcceptTrade;

	protected prepareConfig(config, flags) {
		const mergedConfig = { ...config };
		if (flags.auctionId) {
			mergedConfig.nft.acceptTradeAsset.auctionId = flags.auctionId;
		}
		if (flags.bidId) {
			mergedConfig.nft.acceptTradeAsset.bidId = flags.bidId;
		}

		return mergedConfig;
	}

	protected getCommand(): any {
		return NFTAcceptTrade;
	}
}
