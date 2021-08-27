import { flags } from "@oclif/command";

import { builders } from "../../builders";
import { TransactionType } from "../../enums";
import { SendBase } from "../../shared/send-base";

export default class SecondSignature extends SendBase {
	public static override description = SendBase.defaultDescription + builders[TransactionType.SecondSignature].name;
	public static override flags = {
		...SendBase.defaultFlags,
		secondPassphrase: flags.string({ char: "s", description: "Second passphrase" }),
	};

	public override type = TransactionType.SecondSignature;

	protected prepareConfig(config, flags) {
		const mergedConfig = { ...config };
		if (flags.secondPassphrase) {
			mergedConfig.secondPassphrase = flags.secondPassphrase;
		}

		return mergedConfig;
	}

	protected getCommand(): any {
		return SecondSignature;
	}
}
