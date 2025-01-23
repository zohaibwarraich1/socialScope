import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Login() {
  return (
    <main className="pt-24 pb-16 flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">
            Login to SocialScope
          </CardTitle>
          <CardDescription>
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <button className="w-full">Login</button>
          <div className="text-sm text-center space-y-2">
            <a href="#" className="text-emerald-600 hover:underline">
              Forgot password?
            </a>
            <p>
              Dont have an account?{" "}
              <a href="#" className="text-emerald-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
