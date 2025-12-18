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
                "bg-[url('http://test.xamidovcoder.uz/media/crm/background_images/background_uWHEnUk.jpg')]",
                "h-screen flex items-center bg-center bg-cover justify-center"
            )}>
            <div className="backdrop-blur-md p-10 w-full h-full flex justify-center items-center bg-black/10">
                <div className="max-w-sm">
                    <h2 className="text-2xl font-semibold mb-8">Meet — havola orqali video uchrashuvlar</h2>
                    <div className="flex flex-col gap-2 min-w-[360px]">
                        <div className="grid grid-cols-2 gap-2">
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

const buttonClassname = 'shadow-lg py-3 px-2 flex items-center justify-center gap-2 text-sm rounded-xl cursor-pointer bg-secondary'