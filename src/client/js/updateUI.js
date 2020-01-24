const updateUI = async () => {
  console.log('UpdateUI started')
    const request = await fetch('http://localhost:8080/getData');
    console.log(request);

    try{
      const allData = await request.json();
      console.log(allData[0]);
      console.log('Data converted')
      updateHTML(allData[0]);
    }catch(error){
      console.log("error", error);
    }
};



    //Add Locations
const updateHTML = (allData) => {
    const HTMLresults = "<h1>Form Results</h1><div id=\"locations\" class=\"entity\"></div><div id=\"organizations\" class=\"entity\"></div><div id=\"people\" class=\"entity\"></div><div id=\"keywords\" class=\"entity\"></div>"
    document.getElementById('results').innerHTML = HTMLresults

    const locations = allData.loc
    let locationHTML = "<h1>Locations</h1>"
    locations.forEach((location) => {
      locationHTML += "<div><a href=\"https://en.wikipedia.org/wiki/" + location + "\">" + location + "</a></div>"
    })
    document.getElementById('locations').innerHTML = locationHTML

    //Add Keywords
    const keywords = allData.keyW
    let keywordHTML = "<h1>Keywords</h1>"
    keywords.forEach((keyword) => {
      keywordHTML += "<div><a href=\"https://en.wikipedia.org/wiki/" + keyword + "\">" + keyword + "</a></div>"
    })
    document.getElementById('keywords').innerHTML = keywordHTML

    //Add Organizations
    const organizations = allData.org
    let organizationHTML = "<h1>Organizations</h1>"
    organizations.forEach((organization) => {
      organizationHTML += "<div><a href=\"https://en.wikipedia.org/wiki/" + organization + "\">" + organization + "</a></div>"
    })
    document.getElementById('organizations').innerHTML = organizationHTML

    //Add People
    const people = allData.pers
    let peopleHTML = "<h1>People</h1>"
    people.forEach((person) => {
        peopleHTML += "<div><a href=\"https://en.wikipedia.org/wiki/" + person + "\">" + person + "</a></div>"
    })
    document.getElementById('people').innerHTML = peopleHTML
};

export {
  updateUI,
  updateHTML
 }
