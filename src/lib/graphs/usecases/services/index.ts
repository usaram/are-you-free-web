import { SignInWithCredential } from "@/lib/graphs/usecases/services/auth/SignInWithCredential";
import { SignUpWithCredential } from "@/lib/graphs/usecases/services/auth/SignUpWithCredential";

export const services = {
	// auth
	SignUpWithCredential,
	SignInWithCredential,
}
