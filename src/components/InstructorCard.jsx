const InstructorCard = (props) => {
    return (
        <div className={`box p-5 py-5 rounded-md`}>
            <div className={`${props.color}`}>{props.icon}</div>
            <div className='text mt-2'>
                <h4 className='text-lg font-semibold text-black'>{props.title}</h4>
                <p className='text-[15px]'>{props.desc}</p>
            </div>
        </div>
    );
}

export default InstructorCard;