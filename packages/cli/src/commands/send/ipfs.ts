import { flags } from "@oclif/command";

import { builders } from "../../builders";
import { TransactionType } from "../../enums";
import { SendBase } from "../../shared/send-base";

export default class Ipfs extends SendBase {
	public static override description = SendBase.defaultDescription + builders[TransactionType.Ipfs].name;
	public static override flags = {
		...SendBase.defaultFlags,
		ipfs: flags.string({ char: "i", description: "Ipfs" }),
	};

	public override type = TransactionType.Ipfs;

	protected prepareConfig(config, flags) {
		const mergedConfig = { ...config };
		if (flags.ipfs) {
			mergedConfig.ipfs = flags.ipfs;
		}

		return mergedConfig;
	}

	protected getCommand(): any {
		return Ipfs;
	}
}
