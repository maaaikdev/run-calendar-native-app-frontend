const baseUrl = 'http://localhost:5001';

export async function getCalendarEvents(){    
    const LATEST_EVENTS = `${baseUrl}/events`;

    console.log("ITEMAS 12", LATEST_EVENTS)

    const rawData = await fetch(LATEST_EVENTS);
    const items = await rawData.json();

    // console.log("ITEMAS 2", json)

    // const { items } = json;
    // console.log("ITEMAS 3", items)

    return items.map((item) => {
        const { id, name, date, image, distance, place, elevationGain, category, organizationName, organizationLogo, urlSite, location } = item;
        const { latitude, length } = location;

        return {
            id,
            name,
            date,
            image,
            distance,
            place,
            elevationGain,
            category,
            organizationName,
            organizationLogo,
            urlSite,
            latitude,
            length
        }
    });
};

export async function getEventDetails(id){
    const EVENT_DETAILS = `${baseUrl}/events/${id}`;

    const rawData = await fetch(EVENT_DETAILS);
    const json = await rawData.json();

    const { category, date, distance, elevationGain, image, location,  name,  organizationLogo,  organizationName, place, price, urlSite } = json;
    const { latitude, length } = location;
    return {
        id,
        name,
        date,
        image,
        distance,
        place,
        elevationGain,
        category,
        organizationName,
        organizationLogo,
        urlSite,
        latitude,
        length
    }
}