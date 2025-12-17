export type StudentStatus = "0" | "1" | "2"
export type Gender = "male" | "female"

export type Student = {
    id: number
    full_name: string
    email: string
    phone: string
    status: StudentStatus
    groups: string[]
    gender: Gender
    password?: string
}