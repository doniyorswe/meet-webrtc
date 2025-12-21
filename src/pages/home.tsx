import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ArrowRight, CalendarClock, Video } from "lucide-react";
import { useNavigate } from "react-router";

export default function HomePage() {
    const navigate = useNavigate()
    function handleCreateMeet() {
        navigate('/j/57072249338074')
    }

    return (
        <div
            className={cn(
                "bg-[url('https://yastatic.net/s3/psf/general-themes/darkflow-1536-a7e53ebfd64a82a126773db166d30c1b.jpg')]",
                "h-screen flex items-center bg-center bg-cover justify-center"
            )}>
            <div className="p-10 w-full h-full flex justify-center items-center">
                <div className=" bg-black/20 p-10 rounded-4xl backdrop-blur-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-8">Meet — havola orqali video uchrashuvlar</h2>
                    <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <button className={cn(buttonClassname, 'bg-primary')} onClick={handleCreateMeet}>
                                <Video size={20} />
                                <p>Uchrashuv boshlash</p>
                            </button>
                            <div className={cn(buttonClassname)}>
                                <CalendarClock size={20} />
                                <p>Rejalashtirish</p>
                            </div>
                        </div>
                        <div className='relative'>
                            <Input placeholder="Kod yoki havola kiriting" className="text-sm rounded-xl bg-secondary! shadow-lg" />
                            <button className={cn(buttonClassname, 'absolute right-1 top-1 py-2 px-3 shadow-none bg-background')}>
                                <span>Qo'shilish</span>
                                <ArrowRight size={12} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const buttonClassname = 'shadow-lg py-3 px-1 flex items-center justify-center gap-2 text-sm rounded-xl cursor-pointer bg-secondary'