import { Card, CardHeader, CardContent, CardActions, Skeleton } from "@mui/material";

export default function PoemCardSkeleton() {
    return (
        <Card variant="outlined">
            <CardHeader
                title={<Skeleton width="70%" />}
            />

            <CardContent>
                <Skeleton />
                <Skeleton />
                <Skeleton width="85%" />
            </CardContent>

            <CardActions sx={{ justifyContent: "space-between" }}>
                <Skeleton
                    variant="rounded"
                    width={100}
                    height={32}
                />
                <Skeleton width={60} />
            </CardActions>
        </Card>
    );
}