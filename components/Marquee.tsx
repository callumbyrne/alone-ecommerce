const MarqueeSpan = () => {
  return (
    <span className="pr-3 text-3xl font-bold tracking-widest">
      Wear Alone, or with friends! ~{' '}
    </span>
  )
}

const Marquee = () => {
  return (
    <div className="marquee py-10 text-pink-300">
      <div className="marquee_inner py-2">
        <MarqueeSpan />
        <MarqueeSpan />
        <MarqueeSpan />
        <MarqueeSpan />
      </div>
    </div>
  )
}

export default Marquee
