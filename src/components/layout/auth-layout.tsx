import { Toaster } from "@/components/ui/sonner";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="h-full bg-[#F4F9FD] dark:bg-black/40 p-4">
            <div className="h-full w-full bg-background rounded-3xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                <div className="p-3 flex w-full items-center justify-center">
                    {children}
                </div>
                <div className="bg-linear-to-r from-primary to-primary/70 dark:from-background dark:to-background hidden md:flex items-center justify-center p-20">
                    <div className="bg-[url(/images/login-woman.png)] bg-no-repeat bg-contain w-full h-full bg-foreground/10 p-10 rounded-3xl bg-bottom-right " style={{ backgroundSize: "70%" }}>
                        <h1 className="text-4xl max-w-56 text-background dark:text-foreground">
                            Very good works are waiting for you Login Now!!!
                        </h1>
                    </div>
                </div>

            </div>
            <Toaster position="bottom-right" />
        </div>
    )
}
