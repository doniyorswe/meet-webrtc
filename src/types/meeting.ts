export type MeetingStatus = "0" | "1" | "2"

export type Meeting = {
    id: number
    name: string
    students_count: number
    next_lesson_date: string
    status: MeetingStatus
    start_date: string
    duration: number
    progress: number
}