import HomeCarousel from "@/components/HomeCarousel"

const HomePage = () => {
  return (
    <div className="bg-base-background-l0 text-high-emphasis flex flex-1 flex-col justify-between overflow-auto">
      <div className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col mx-auto w-full max-w-7xl flex-1 gap-4 px-3 sm:px-6">

      <HomeCarousel />
        </div>
      </div>
    </div>
  )
}

export default HomePage
