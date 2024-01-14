
export default function AuthContainer({children}: {children: React.ReactNode}) {
  return (
    <div className=' flex justify-center items-center min-h-fit h-full w-full '>
        {children}
    </div>
  )
}
