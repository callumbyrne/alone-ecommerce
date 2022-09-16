const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent<EventTarget>) => e.preventDefault()

  return (
    <div className="flex flex-col items-center justify-center bg-[#d3d327] py-20 text-white xl:py-32">
      <h2 className="text-3xl font-bold tracking-wider lg:mb-2 lg:text-4xl xl:text-5xl">
        Stay up to date
      </h2>
      <h3 className="pb-3 text-sm tracking-wider lg:mb-1 xl:text-2xl">
        Sunglasses, sales, giveaways & more!
      </h3>
      <form onSubmit={handleSubmit} className="lg:text-lg xl:text-xl">
        <input
          type="email"
          placeholder="Ur email here :)"
          className="w-3/5 py-2 pl-2 text-gray-600 placeholder-gray-600 lg:py-3"
        />
        <button
          type="submit"
          className="w-2/5 bg-purple-300 py-2 font-bold tracking-wider lg:py-3 lg:px-3"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newsletter
