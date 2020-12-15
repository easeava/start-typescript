import { demo } from "@/util";

export class Server {
	say(): Say {
		return {
			msg: "hello",
		};
	}

	demo(): void {
		demo();
	}
}
