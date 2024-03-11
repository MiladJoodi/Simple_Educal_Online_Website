
import AboutCard from "@/components/AboutCard";
import AboutContent from "@/components/AboutContent";
import { FaBookDead } from "react-icons/fa"


const AboutPage = () => {
    return (
        <>
            <section className='about py-16'>
                <div className='container'>
                    <div className='heading text-center py-12'>
                        <h1 className='text-3xl font-semibold text-black'>Why An Scholercity Out Of The Ordinary</h1>
                        <span className='text-sm mt-2 block'>you do not have to struggle alone, you have got our assistance and help.</span>
                    </div>
                    <div className='grid grid-cols-4 gap-5 mt-5 md:grid-cols-2'>
                        <AboutCard color='bg-[#2D69F0]' icon={<FaBookDead size={50} />} title='4,000 Online courses' desc="You don't have to struggle alone, you've " />
                        <AboutCard color='bg-[#DD246E]' icon={<FaBookDead size={50} />} title='4,000 Online courses' desc="You don't have to struggle alone, you've " />
                        <AboutCard color='bg-[#8007E6]' icon={<FaBookDead size={50} />} title='4,000 Online courses' desc="You don't have to struggle alone, you've " />
                        <AboutCard color='bg-[#0CAE74]' icon={<FaBookDead size={50} />} title='4,000 Online courses' desc="You don't have to struggle alone, you've " />
                    </div>
                </div>
            </section>
            <AboutContent />
        </>
    );
}

export default AboutPage;