import { SignInWithCredential } from "@/lib/graphs/usecases/handlers/auth/SignInWithCredential";
import { SignUpWithCredential } from "@/lib/graphs/usecases/handlers/auth/SignUpWithCredential";

export const handlers = {
	// auth
	SignUpWithCredential,
	SignInWithCredential,
}
