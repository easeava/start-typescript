import net from "net";
import { demo } from "@/util";

net.createServer().listen(3000);

const a = () => {
	console.log(123);
};

a();

console.log(a);

demo();
