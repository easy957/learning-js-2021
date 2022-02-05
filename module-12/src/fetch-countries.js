export default class FetchCountries {
  constructor() {
    this.searchQuery = '';
  }

  search(searchQuery) {
    this.searchQuery = searchQuery;
    return fetch(`https://restcountries.com/v3.1/name/${this.searchQuery}`)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        return data;
      });
  }
}
