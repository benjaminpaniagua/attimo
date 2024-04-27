import "../../index.css";

export function Search() {
    return (
        <div className="grid">
            <h1 className="">Your Events</h1>
            <div className="flex justify-between display-mobile ">
                <div className="flex mt-8">
                    <form  action="/search" method="get">
                            
                    </form>
                </div>
                <div className="flex gap-5 mt-8">
                    <label className="whitespace-nowrap items-center flex   " htmlFor="">Short by: </label>
                    <select className="block bg-clr-light-gray py-2 px-4 w-full rounded-md focus:outline-none text-clr-white">
                        <option value="1">Category</option>
                    </select>
                    <select className="block bg-clr-light-gray py-2 px-4 w-full rounded-md focus:outline-none text-clr-white">
                        <option value="1">Course</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
