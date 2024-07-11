import { Protect, SignedIn } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const ProtectElement = ({
	children,
}: {
	children: ReactNode;
}) => {
	return (
		<SignedIn>
			<Protect
				condition={
					(has) =>
						has({
							role: "org:admin",
						})
					// ||
					// has({
					// 	role: "org:billing_manager",
					// })
				}
				// fallback={
				// 	<p>
				// 		Only an Admin or Billing
				// 		Manager can access this
				// 		content.
				// 	</p>
				// }
			>
				{children}
			</Protect>
		</SignedIn>
	);
};

export default ProtectElement;
