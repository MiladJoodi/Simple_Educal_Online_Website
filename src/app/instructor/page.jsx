import InstructorCard from "@/components/InstructorCard";
import Image from "next/image";
import { FaGraduationCap, FaUsers } from "react-icons/fa"
import { GiEvilBook, GiWorld } from "react-icons/gi"

const InstructorPage = () => {
    return (
        <>
            <section className='instructor mb-16'>
                <div className='container'>
                    <div className='heading py-12 text-center w-2/3 m-auto md:w-full'>
                        <h1 className='text-3xl font-semibold text-black'>What Is Skilline?</h1>
                        <span className='text-[14px] mt-2 block'>Sloshed faff about me old mucker blatant bubble and squeak hanky panky some dodgy chav bevvy arse chimney pot I, ruddy plastered buggered smashing blow off I am telling up the kyver he legged it bleeder jolly good,</span>
                    </div>
                    <div className='content grid grid-cols-2 gap-5 md:grid-cols-1'>
                        <div className='images rounded-lg relative overflow-hidden h-72 w-ful before:bg-backbg before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10'>

                            <Image
                                src="https://bdevs.net/wp/educal/wp-content/uploads/2021/09/what-1.jpg"
                                alt="logo"
                                className="rounded-t-lg object-cover w-full h-72"
                                height={100}
                                width={200}
                            />

                            <div className='categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center'>
                                <h2 className='text-3xl text-white font-semibold'>Mostly Online Learning</h2>
                                <button className='text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white'>Start a class today</button>
                            </div>
                        </div>
                        <div className='images rounded-lg relative overflow-hidden h-72 w-ful before:bg-backbg before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10'>
                            <Image
                                src="https://bdevs.net/wp/educal/wp-content/uploads/2021/09/what-2.jpg"
                                alt="logo"
                                className="rounded-t-lg object-cover w-full h-72 relative"
                                height={100}
                                width={200}
                            />
                            <div className='categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center'>
                                <h2 className='text-3xl text-white font-semibold'>Become an Instructor</h2>
                                <button className='text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white'>Start a class today</button>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='heading py-12 text-center w-2/3 m-auto md:w-full'>
                            <h1 className='text-3xl font-semibold text-black'>We Are Proud</h1>
                            <span className='text-[14px] mt-2 block'>You do not have to struggle alone, you have got our assistance and help.</span>
                        </div>
                        <div className='content grid grid-cols-4 gap-5 md:grid-cols-2'>
                            <InstructorCard color='text-red-500' icon={<FaUsers size={40} />} title='63' desc='Students Enrolled' />
                            <InstructorCard color='text-orange-500' icon={<GiEvilBook size={40} />} title='20' desc='Total Courses' />
                            <InstructorCard color='text-purple-500' icon={<FaGraduationCap size={40} />} title='4' desc='Online Learners' />
                            <InstructorCard color='text-indigo-500' icon={<GiWorld size={40} />} title='4' desc='Online Learners' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default InstructorPage;