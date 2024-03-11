import { courses } from "@/lib/dummydata"; 
import Image from "next/image";
import Link from "next/link";
import { AiTwotoneCalendar } from "react-icons/ai"

const BlogPage = () => {
    return (
        <>
      <section className='courses'>
        <div className='w-4/5 m-auto'>
          <div className='heading text-center py-12'>
            <h1 className='text-3xl font-semibold text-black'>
              We Share <br />
              Our Thoughts On Design
            </h1>
            <span className='text-sm mt-2 block'>you do not have to struggle alone, you have got our assistance and help.</span>
          </div>
          <div className='grid grid-cols-3 gap-5 md:grid-cols-1'>
            {courses.slice(0, 3).map((item) => (
              <div key={item.id} className='box rounded-lg shadow-shadow1 bg-white'>
                <div className='images rounded-t-lg relative overflow-hidden h-40 w-ful'>
                
                  <Image
                        src={item.cover}
                        alt="logo"
                        width={100}
                        height={100}
                        className="rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300"
                    />
                
                </div>
                <div className='text p-3'>
                  <span className='text-[12px] bg-backbg p-1 px-3 text-white rounded-[5px]'>Lifestyle</span>
                 
                  <Link href="/single-blog">
                  <h3 className='text-black my-4 font-medium h-10'>{item.title}</h3>
                  </Link>

                  <div className='user flex items-center justify-between'>
                    <div className='flex items-center'>
                      <Image
                        src="https://secure.gravatar.com/avatar/3d3cfbb52e9378f06b699b7e2afe020a?s=96&d=mm&r=g"
                        alt="logo"
                        width={100}
                        height={100}
                        className="rounded-full w-7 h-7 object-cover shadow-shadow1"
                    />
                      <span className='text-[14px] ml-2'> Joodi</span>
                    </div>
                    <div className='flex items-center'>
                      <AiTwotoneCalendar />
                      <span className='text-[14px] ml-2'> Sep 16, 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
    );
}

export default BlogPage;