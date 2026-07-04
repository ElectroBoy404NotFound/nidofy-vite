import { Card, CardHeader, CardContent, CardActions, Skeleton } from "@mui/material";

export default function PoemCardSkeleton() {
    return (
        <Card variant="outlined" sx={{
            bgcolor: "#161b22",
            color: "#e6edf3",
            borderRadius: 3,
            boxShadow: "0 10px 35px rgba(0,0,0,.4)",
            border: "1px solid rgba(255,255,255,.06)"
        }}>
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