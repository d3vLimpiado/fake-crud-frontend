import { Button } from "@/components/ui/button";
import Typography from '@/components/ui/typography';

const {H1} = Typography

export default function Home() {
  return (
    <div className="h-svh flex flex-col justify-center items-center">
      <H1>FAKE CRUD</H1>
      <Button>EYYY FIRST BUTTON!</Button>
    </div>
  );
}
