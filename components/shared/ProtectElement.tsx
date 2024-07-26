import { Protect, SignedIn } from "@clerk/nextjs";
import { ReactNode } from "react";

const ProtectElement = async ({
	children,
	userEmail,
}: {
	children: ReactNode;
	userEmail: string | undefined;
}) => {
	console.log(process.env.ADMIN_USER2, "user admin");

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
			></Protect>
			{children}
		</SignedIn>
	);
};

export default ProtectElement;
