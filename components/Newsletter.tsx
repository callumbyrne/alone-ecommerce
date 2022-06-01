const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent<EventTarget>) => e.preventDefault()

  return (
    <div className="flex flex-col items-center justify-center bg-[#d3d327] py-20 text-white">
      <h2 className="text-3xl font-bold tracking-wider">Stay up to date</h2>
      <h3 className="pb-3 text-sm tracking-wider">
        Sunglasses, sales, giveaways & more!
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ur email here :)"
          className="w-3/5 py-2 pl-2 text-gray-600 placeholder-gray-600"
        />
        <button
          type="submit"
          className="w-2/5 bg-purple-300 py-2 font-bold tracking-wider"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newsletter
