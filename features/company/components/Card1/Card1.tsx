import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Card1 = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            culpa ratione quas earum ad, ipsa cupiditate similique excepturi
            quam sapiente molestiae dolore possimus dolores cumque, libero nam
            delectus labore eum.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer read more</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Card1;
