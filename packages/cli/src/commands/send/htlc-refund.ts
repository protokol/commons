import { flags } from "@oclif/command";

import { builders } from "../../builders";
import { TransactionType } from "../../enums";
import { SendBase } from "../../shared/send-base";

export default class HtlcRefund extends SendBase {
	public static override description = SendBase.defaultDescription + builders[TransactionType.HtlcRefund].name;
	public static override flags = {
		...SendBase.defaultFlags,
		lockTransactionId: flags.string({ description: "Lock transaction id" }),
	};

	public override type = TransactionType.HtlcRefund;

	protected prepareConfig(config, flags) {
		const mergedConfig = { ...config };
		if (flags.lockTransactionId) {
			mergedConfig.htlc.refund.lockTransactionId = flags.lockTransactionId;
		}

		return mergedConfig;
	}

	protected getCommand(): any {
		return HtlcRefund;
	}
}
