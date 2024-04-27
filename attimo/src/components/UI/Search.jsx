import "../../index.css";

export function Search() {
    return (
        <div className="grid">
            <h1 className="mt-12 mb-7">Your Events</h1>
            <div className="flex justify-between display-mobile">
                <div className="flex">
                    <form  action="/search" method="get">
                        <input className="w-80 h-10 rounded-3xl" type="search" name="q" placeholder="Search by name" />
                    </form>
                </div>
                <div className="flex gap-5">
                    <label className="" htmlFor="">Short by: </label>
                    <select className="block w-full bg-clr-light-gray py-2 px-4 rounded-md focus:outline-none text-clr-white">
                        <option value="1">This Week</option>
                        <option value="2">Today</option>
                    </select>
                    <select className="block w-full bg-clr-light-gray py-2 px-4 rounded-md focus:outline-none text-clr-white">
                        <option value="1">This Week</option>
                        <option value="2">Today</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
