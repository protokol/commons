import { flags } from "@oclif/command";

import { builders } from "../../builders";
import { TransactionType } from "../../enums";
import { SendBase } from "../../shared/send-base";

export default class NFTBurnAsset extends SendBase {
	public static override description = SendBase.defaultDescription + builders[TransactionType.NFTBurnAsset].name;
	public static override flags = {
		...SendBase.defaultFlags,
		nftId: flags.string({ description: "Nft id for burn" }),
	};

	public override type = TransactionType.NFTBurnAsset;

	protected prepareConfig(config, flags) {
		const mergedConfig = { ...config };
		if (flags.nftId) {
			mergedConfig.nft.burnAsset.nftId = flags.nftId;
		}

		return mergedConfig;
	}

	protected getCommand(): any {
		return NFTBurnAsset;
	}
}
