import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

function SkeletonCard() {
    return (
        <div className="">
            <Card>
                <CardHeader>
                    <Skeleton className="w-12 h-12 rounded-full"></Skeleton>
                    <Skeleton className="h-4 w-32 mb-4" />
                </CardHeader>
                <CardContent>
                    <Skeleton className="h-4 w-64 mb-3" />
                    <Skeleton className="h-4 flex-grow mb-3" />
                    <Skeleton className="h-4 w-40 mb-3" />
                    <Skeleton className="h-4 w-24" />
                </CardContent>
                <CardFooter className="flex flex-row justify-between">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-4 w-28" />
                </CardFooter>
            </Card>
        </div>
    );
}
export default SkeletonCard;
