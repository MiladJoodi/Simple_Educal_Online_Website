const AboutCard = (props) => {
    return (
        <div className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}>
            <div className='icon'>{props.icon}</div>
            <div className='text mt-5'>
                <h4 className='text-lg font-semibold my-3'>{props.title}</h4>
                <p className='text-sm'>{props.desc}</p>
            </div>
        </div>
    );
}

export default AboutCard;