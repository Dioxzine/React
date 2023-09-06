import "./EventsPage.css"
import CheckBox from "../components/CheckBox";
import SearchBar from "../components/searchBar";
import EventBox from "../components/EventBox";

function EventsPage()  {
return(
    <div className="divBody">
        <div className="tagBox">
            <h1 className="title">Eventi</h1>
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
            <EventBox />
        </div>
    </div>
    );
};

export default EventsPage;