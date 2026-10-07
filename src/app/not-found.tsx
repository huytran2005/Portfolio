import Link from "next/link";
import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center text-center">
      <Container className="space-y-4">
        <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
        <p className="text-sm text-zinc-400">The page you are looking for does not exist.</p>
        <Link href="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </Container>
    </div>
  );
}
