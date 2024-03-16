function initialPageLoad() {
    const title = document.createElement('h1');
    title.textContent = "About Ganges";
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(title);

    const description = document.createElement('span');
    description.setAttribute('id', 'description')
    description.textContent = 'Ganges Tandoori Restaurant was established during the 1980s, its name is derived from a sacred body of water that begins high in the Himalaya Mountains and empties out into the Bay of Bengal; since its development, it has been considered as one of the most leading Indo Bangla themed restaurant situated in Dalston. Due to its popularity, the restaurant has received a number of awards and positive reviews from a wide range of critics!';
    contentDiv.appendChild(description);

    const hours = document.createElement('p');
    hours.setAttribute('id', 'hours');
    const h2 = document.createElement('h1');
    h2.textContent = 'Open Hours';
    hours.appendChild(h2);

    const weekday = document.createElement('b');
    weekday.textContent = 'Weekdays: ';
    hours.appendChild(weekday);

    const timeRange1 = document.createElement('span');
    timeRange1.textContent = '5pm - 11pm';
    hours.appendChild(timeRange1);
    hours.appendChild(document.createElement('br'));

    hours.appendChild(document.createElement('br'));

    const weekend = document.createElement('b');
    weekend.textContent = 'Weekends: ';
    hours.appendChild(weekend);


    const timeRange2 = document.createElement('span');
    timeRange2.textContent = '5pm - 12am';
    hours.appendChild(timeRange2);
    hours.appendChild(document.createElement('br'));
    hours.appendChild(document.createElement('br'));

    contentDiv.appendChild(hours);
    hours.appendChild(document.createElement('br'));

    const locationTitle = document.createElement('h1');
    locationTitle.setAttribute('id', 'locationTitle');
    locationTitle.textContent = "Location";
    contentDiv.appendChild(locationTitle);

    const location = document.createElement('span');
    location.setAttribute('id', 'location');
    location.textContent = "78B Dalston Ln, London E8 3AH"
    contentDiv.appendChild(location)

}

export { initialPageLoad };
