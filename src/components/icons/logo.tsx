'use client'
export default function Blur ({ className }: { className?: string }) {
  return (
    <div>
      <div
        className={`w-[100vw] h-[100vw] md:w-[100vh] md:h-[100vh] absolute top-[20vh] md:top-0 left-0 lg:left-[20vh] 2xl:left-[50vh] z-10 rounded-full blur-3xl opacity-20 animate-[spin_2s_ease-in-out_infinite] bg-gradient-to-l from-primary to-secondary ${
          className ? className : ''
        }`}
      />
    </div>
  )
}
