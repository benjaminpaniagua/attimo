import "../../index.css";

export function Search() {
    return (
        <div className="grid">
            <h1 className="mt-12 mb-7">Your Events</h1>
            <div className="flex justify-between">
                <div className="flex">
                    <form  action="/search" method="get">
                        <input className="w-80 h-10 rounded-3xl" type="search" name="q" placeholder="Search by name" />
                    </form>
                </div>
                <div className="flex gap-5">
                    <label className="pl-5 pt-2" htmlFor="Category">Short by:</label>
                    <input className="pl-2" list="Categories" id="category" name="category" placeholder="Category >"/>
                    <datalist id="Categories">
                        <option value="Quiz" />
                    </datalist>
                    <input className="pl-2" list="Courses" id="course" name="course" placeholder="Course >"/>
                    <datalist id="Courses">
                        <option value="Quiz" />
                    </datalist>
                    <input className="pl-2" list="Weeks" id="thisWeek" name="thisWeek" placeholder="This Week >"/>
                    <datalist id="Weeks">
                        <option value="Quiz" />
                    </datalist>
                </div>
            </div>
        </div>
    );
}
