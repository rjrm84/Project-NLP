import handleSubmit from './js/formHandler';


import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const button = document.getElementById('submit');
button.addEventListener('click', () => handleSubmit());
