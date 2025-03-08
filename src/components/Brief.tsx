import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Brief() {
  return (
    <div className="bg-white max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <section id="about" className="container mx-auto px-4 py-12 sm:py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gulfBlue">
              {`We're Building`} <span className="text-orange">Everything Best</span> That You Need!
            </h1>
            <p className="text-black max-w-xl">
              Makki Al-Abadi General Construction has +11 years of experience in various sectors, focusing on quality
              work, innovation, and sustainability to exceed client expectations.
            </p>
            <Link href={"#ceo"}>
            <Button className="bg-orange hover:bg-orange text-white px-8 py-6 text-lg rounded-[10px] mt-10">
              MORE ABOUT US
            </Button></Link>
           
          </div>
         
          <div className="relative h-[400px] md:h-[500px] grid grid-cols-2 lg:mt-40 lg:gap-x-5 xl:gap-x-0">
          <div className="absolute hidden md:block top-48 right-80 lg:right-44 xl:top-48 xl:right-72 2xl:right-96 2xl:top-56 bg-orange text-white p-4 z-10 font-bold">
                <div className="text-2xl">+11 Years</div>
                <div>Of Experience</div>
              </div>
          <div className="mr-3 mt-8 sm:mt-10 sm:mr-0 sm:pl-10 md:pl-20 lg:pl-0">
                <Image
                  src="/images/solar.jpg"
                  alt="Construction worker"
                  width={250}
                  height={200}
                  className="object-cover rounded-lg"
                />
              </div>
            <div className=" md:grid grid-rows-2 xl:-ml-10 2xl:-ml-20 2xl:pr-5">
              
              <div className="relative col-span-2 md:col-span-1 mb-2 lg:mb-0">
              <Image
                src="/images/construction.jpg"
                alt="Construction worker"
                width={800}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="lg:-mt-20 xl:pt-20 2xl:pt-24">
                <Image
                  src="/images/crane.jpg"
                  alt="Construction worker"
                  width={250}
                  height={200}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          
          </div>
        </div>
      </section>

      {/* Brief Section */}
      <section className="bg-gray-50 py-16 md:py-24">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Item 01 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group">
        <div className="text-4xl font-bold text-gulfBlue mb-4 transition-all duration-300 group-hover:text-white">01</div>
        <h3 className="text-xl font-bold text-orange mb-3 transition-all duration-300 group-hover:text-white">Experienced Construction</h3>
        <p className="text-zinc-800 transition-all duration-300 group-hover:text-white">
          Makki Al-Abadi General Construction has +11 years of experience in various sectors.
        </p>
        <div className="absolute inset-0 bg-gulfBlue opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
      </div>

      {/* Item 02 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group">
        <div className="text-4xl font-bold text-gulfBlue mb-4 transition-all duration-300 group-hover:text-white">02</div>
        <h3 className="text-xl font-bold text-orange mb-3 transition-all duration-300 group-hover:text-white">Commitment to Excellence</h3>
        <p className="text-zinc-800 transition-all duration-300 group-hover:text-white">
          Focus on quality work, innovation, and sustainability to exceed client expectations.
        </p>
        <div className="absolute inset-0 bg-gulfBlue opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
      </div>

      {/* Item 03 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group">
        <div className="text-4xl font-bold text-gulfBlue mb-4 transition-all duration-300 group-hover:text-white">03</div>
        <h3 className="text-xl font-bold text-orange mb-3 transition-all duration-300 group-hover:text-white">Skilled Team</h3>
        <p className="text-zinc-800 transition-all duration-300 group-hover:text-white">
          OUR projects benefit from a team of experienced professionals.
        </p>
        <div className="absolute inset-0 bg-gulfBlue opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
      </div>

      {/* Item 04 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group">
        <div className="text-4xl font-bold text-gulfBlue mb-4 transition-all duration-300 group-hover:text-white">04</div>
        <h3 className="text-xl font-bold text-orange mb-3 transition-all duration-300 group-hover:text-white">Innovation and Sustainability</h3>
        <p className="text-zinc-800 transition-all duration-300 group-hover:text-white">
          Focuses on innovation and sustainability to exceed client expectations.
        </p>
        <div className="absolute inset-0 bg-gulfBlue opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
      </div>
    </div>
  </div>
</section>
    
    </div>
  )
}

