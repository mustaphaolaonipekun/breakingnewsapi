myLoader = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 10000);
};

const url =
//   "http://api.mediastack.com/v1/news?access_key=ea0ea07173f00db1521370d113401666&countries=au,us&sources=cnn,bbc&categories=general&date=2023-06-20,2023-06-25&sort=popularity&limit=5&offset=100";
// '"https://newsapi.org/v2/everything?q=technology&from=2023-05-26&lang=en&sortBy=publishedAt&apiKey=b6c5df188c844d53b4dd3d423b70bfd8&countries=au,us&sources=cnn,bbc&categories=general&page=1&pagesize=1"
"https://newsdata.io/api/1/news?apikey=pub_251842563dcf91c3c1c460ff5b3a339854733&q=pizza"
async function breakNews() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  document.querySelector('.title').innerHTML = data.results.title;
  document.querySelector('.description').innerHTML = data.status;
  document.querySelector('.source').innerHTML ="source:" +  data.articles.source;
  document.querySelector('.category').innerHTML = "category:" + data.category;
}

breakNews();

// const searchBox = document.querySelector('.search input');
// const searchBtn = document.querySelector('.search button');
// const icon = document.querySelector('.icon');

// const url = "https://api.openweathermap.org/data/2.5/weather?appid=e7bc452cd6b35e4f36cc81b4eab9b8be&city=lagos&units=metric&lang=fr&q=";

// async function weather(city) {
// const response = await fetch(url + city);
// const data = await response.json();
// console.log(data);
// document.querySelector('.city').innerHTML = data.name;
// document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
// document.querySelector('.clouds').innerHTML = "Precipitation:" + " " + Math.floor(data.clouds.all) + "%";
// document.querySelector('.humidity').innerHTML = "Humidity:" +" " + data.main.humidity + "%";
// document.querySelector('.wind').innerHTML ="Wind:" + " " + data.wind.speed  + "km/h";
// if (data.weather[0].main== "Clouds"){
//   icon.src="moon.png";
// }else if (data.weather[0].main== "Rain"){
//   icon.src="rain.png";
// }else if (data.weather[0].main== "Clear"){
//   icon.src="sun.png"
// }else if (data.weather[0].main== "Drizzle"){
//   icon.src="rain.png"
// }else if (data.weather[0].main== "Mist"){
//   icon.src="tornado.png"
// }

// }
// searchBtn.addEventListener('click', () =>{
//    weather(searchBox.value);
// })

// searchBtn.addEventListener('onclick', () => {
//    searchBtn.classList.toggle('fa times');
//  })

// const url = "https://api.openweathermap.org/data/2.5/weather?q=ogun&appid=e7bc452cd6b35e4f36cc81b4eab9b8be&units=metric"
// fetch(url)
// .then((response) => console.log(response.json()))
// .catch((error)=>console.error(error))
