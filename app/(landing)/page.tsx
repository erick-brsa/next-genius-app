import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      Landing Page
      <div>
        <Link href='sign-in'>
          <Button>
            Log in
          </Button>
        </Link>
        <Link href='sign-up'>
          <Button>
            Sign up
          </Button>
        </Link>
      </div>
    </div>
  )
};

export default LandingPage;
