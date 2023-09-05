import "./EventsPage.css"
import CheckBox from "../components/CheckBox";
import SearchBar from "../components/searchBar";

function EventsPage()  {
return(
    <div className="divBody">
        <div className="tagBox">
            <div>
                <div>
                <SearchBar/>
                </div>
                <div>
                    <CheckBox />
                </div>
            </div>            
        </div>
        {/* space betwin grids*/}
        <div>            
        </div>
        {/* space betwin grids*/}
        <div className="eventBox">

        </div>
    </div>
    );
};

export default EventsPage;