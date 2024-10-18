const Footer = () => {
    return (<>
        <div className="flex justify-between bg-gray-900 ">
            <div className="my-20 mx-10 w-60 ">
                <div className="border-4 border-gray-500 w-40 rounded-full">
                    <img src="https://th.bing.com/th/id/OIP.VNOIad-uj6h--uSCSfdkGQHaHa?rs=1&pid=ImgDetMain" alt="logo" className="h-40 rounded-full border-3 border-gray-200" />
                </div>
            </div>
            <div className="mt-10 w-0 h-60 border-2 border-gray-200"></div>
            <div className="flex-1 w-80"></div>
            <div className='flex-1'>
                       
            </div>
        
        </div>

        {/* Real footer */}
        <div className="flex justify-center item-center bg-darknav">

            <h1 className="text-gray-200 text-sm my-4">@copyright (Anshul baghel) 2024</h1>
        </div>
    </>)
}
export default Footer