import { NotFounIcon } from "@/components/icons/illustrations";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center h-full flex-col gap-3">
            <h2 className="text-2xl font-semibold">Oops! This page not found</h2>
            <NotFounIcon size={300} />

            <a href="/meetings" className={buttonVariants({ variant: "secondary", className: "text-foreground! px-5!" })}>
                <ArrowLeft />
                Back to home
            </a>
        </div>
    )
}
