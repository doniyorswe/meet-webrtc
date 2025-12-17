import { cn } from "@/lib/utils";
import { CalendarClock, LogIn, Video } from "lucide-react";

export default function HomePage() {
    return (
        <div
            className={cn(
                "bg-[url('https://yastatic.net/s3/psf/general-themes/darkflow-1536-a7e53ebfd64a82a126773db166d30c1b.jpg')]",
                "h-screen flex items-center justify-center"
            )}>
            <div>
                <h2 className="text-2xl font-semibold mb-8">UzMeet — havola orqali video uchrashuvlar</h2>
                <div className="grid grid-cols-3 gap-4 min-w-[360px]">
                    <div className={cn("h-[300px] col-span-2", buttonClassname)}>
                        <Video size={80} />
                        <p>Uchrashuv boshlash</p>
                    </div>
                    <div className="grid grid-rows-2 gap-4">
                        <div className={cn(buttonClassname)}>
                            <LogIn size={32} />
                            <p>Qo'shilish</p>
                        </div>
                        <div className={cn(buttonClassname)}>
                            <CalendarClock size={32} />
                            <p>Rejalashtirish</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const buttonClassname = 'bg-black/20 backdrop-blur-md shadow-lg flex items-center justify-center flex-col gap-2 rounded-3xl cursor-pointer'