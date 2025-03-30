import { SignInWithCredential } from "@/lib/graphs/usecase/handler/auth/SignInWithCredential";
import { SignUpWithCredential } from "@/lib/graphs/usecase/handler/auth/SignUpWithCredential";

export const handler = {
	// auth
	SignUpWithCredential,
	SignInWithCredential,
}
