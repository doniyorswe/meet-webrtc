import type { ReactNode } from "react"
import Header from "../header"
import { Toaster } from "../ui/sonner"

type Props = {
    children: ReactNode
}

export default function PageLayout({ children }: Props) {

    return (
        <div className="bg-[#F4F9FD] dark:bg-black/40 h-screen flex items-start p-4 gap-5">
            <main className="flex-1 h-full flex flex-col gap-6">
                <Header />
                <div className="flex-1 flex flex-col h-full overflow-y-scroll no-scrollbar">
                    {children}
                </div>
            </main>
            <Toaster position="bottom-center" />
        </div>
    )
}
