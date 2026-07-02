'use client'

export default function SiteBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050b14]">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-45 saturate-75 contrast-110"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,164,65,0.18),transparent_38%),linear-gradient(180deg,rgba(5,11,20,0.45)_0%,rgba(5,11,20,0.76)_56%,rgba(5,11,20,0.94)_100%)]" />
      <div className="absolute -top-32 left-[-4rem] h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute top-1/2 right-[-6rem] h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
    </div>
  )
}
