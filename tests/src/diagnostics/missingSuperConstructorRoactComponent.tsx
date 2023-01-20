import Roact from "@firere/roact";

class X extends Roact.Component<{}, {}> {
	constructor(props: {}) {
		print("X");
		super(props);
	}
	render() {
		return undefined;
	}
}
