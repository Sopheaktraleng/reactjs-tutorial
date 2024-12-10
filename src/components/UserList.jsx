import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard";
const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};

function UserList() {
    const [delayed, setDelayed] = useState(true);
    // Add a 3 second delay before fetching
    useEffect(() => {
        const timer = setTimeout(() => setDelayed(false), 1000);
        return () => clearTimeout(timer);
    }, []);
    const { data, isLoading, error } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
        enabled: !delayed,
    });

    console.log(data);

    if (isLoading || delayed)
        return (
            <div className="grid grid-cols-3 gap-4">
                {"abcdefgi".split("").map((i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        );
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="grid grid-cols-3 gap-4 ">
            {data.map((user) => (
                <Card key={user.id}>
                    <CardHeader>
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <CardTitle>{user.name}</CardTitle>
                        <CardDescription>{user.username}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{user.email}</p>
                        <p>{user.company.catchPhrase}</p>
                        <p>{user.address.zipcode}</p>
                        <p>{user.address.suite}</p>
                    </CardContent>
                    <CardFooter className="flex flex-row justify-between">
                        <Button variant="secondary" className="bg-rose-400">
                            Address
                        </Button>
                        <Badge>{user.address.city}</Badge>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
export default UserList;
