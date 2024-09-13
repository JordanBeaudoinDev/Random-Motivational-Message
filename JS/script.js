const quote = document.getElementById("quote");
fetch('./js/quotes.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let num = Math.floor(Math.random() * 316);
        let value = `<blockquote class="text"> <p>${data[num].quote}"</p><footer>- ${data[num].author}</footer></blockquote>`;
        quote.innerHTML = value;
    })