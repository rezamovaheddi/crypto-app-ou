import { Button } from "@/shared/ui/Buttons"
export default function HomePage(){
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-center gap-7 p-5">
      <h1 className="font-bold text-2xl text-blue-600"> Crypro Reza</h1>
      <Button variant="primary">Click me</Button>
    </main>
    </>
  )
}