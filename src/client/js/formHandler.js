import uiChecker from './uiChecker';
import urlValidation from './nameChecker';

const handleSubmit = ()  => {
    const url = document.getElementById('url').value;
    const error = document.getElementById('error');

    if(urlValidation(url)) {
        error.innerHTML = '';
        const payload = { url };
        const results = document.getElementById('results');
        results.innerHTML = '<p>Loading...</p>';

        fetch('http://localhost:8081/language' ,  {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(response => uiChecker(response));
    } else {
        error.innerHTML = '<p>Please check if your URL is correct. It needs to include http:// or https://</p>';
    }
}

export default handleSubmit;
