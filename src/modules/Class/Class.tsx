import classesFree from './dataClassesFree.json';
import classesPro from './dataClassesPro.json';

export default function Class() {
    return (
        <div className="px-2 flex-1">
            <h2 className="font-bold text-4xl px-2 py-4" >Classes</h2>
            <p>The classes are designed to be suitable for beginners, many of them are free, high quality, with easy-to-understand and practical content.</p>
            <h2 className="font-bold text-3xl mt-8 px-2 py-4" >Classes Free</h2>
            <div className="grid md:grid-cols-3">
                {classesFree.map((item, index) =>
                    <div key={index} className='my-4 grid justify-between gap-x-4 gap-y-2'>
                        <img src={item.Image} width={400} height={200} className='rounded-md' />
                        <p className='text-xl font-bold'>Class: <span className='text-base font-normal'>{item.ClassName}</span></p>
                        <p className='text-xl font-bold w-[400px]'>Description: <span className='text-base font-normal'>{item.Description}</span></p>
                        <button className='bg-cyan-700'>Start</button>
                    </div>
                )}
            </div>
            <h2 className="font-bold text-3xl mt-8 px-2 py-4" >Classes Pro</h2>
            <div className="grid md:grid-cols-3">
                {classesPro.map((item, index) =>
                    <div key={index} className='my-4 grid justify-between gap-x-4 gap-y-2'>
                        <img src={item.Image} width={400} height={200} className='rounded-md' />
                        <p className='text-xl font-bold'>Class: <span className='text-base font-normal'>{item.ClassName}</span></p>
                        <p className='text-xl font-bold w-[400px]'>Description: <span className='text-base font-normal'>{item.Description}</span></p>
                        <p className='text-xl font-bold w-[400px]'>Price: <span className='text-base font-normal'>{item.Price}$</span></p>
                        <button className='bg-cyan-700'>Start</button>
                    </div>
                )}
            </div>
        </div>
    )
}
