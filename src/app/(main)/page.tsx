import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";


const Home = () => {
  return (
    <div>
      <h1 className="text-5xl text-red-300 text-center">
        Landing Page features
      </h1>
      <p className="text-sm font-sans text-gray-300 text-center my-20">
        Start implement
      </p>
      <div className="p-8">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Hello shadcn</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <Input placeholder="Enter something..." />
            <Button>Continue</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
