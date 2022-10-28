const TOKEN ="5675879938:AAHNjb-6f9YnKcgQMbYejoHgO9VGGOV3l9s";
const CHAT_ID = "-1001514927928";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
const myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
  })

document.getElementById('tg').addEventListener('submit', (e) => {
    e.preventDefault();

    let message = `<b>Заявка с сайта</b>\n`;
    let name = document.getElementById('name').value;
    let tel = document.getElementById('tel').value;
    message += `<b>Отправитель: </b>${ name }\n`;
    message += `<b>Телефон: </b> ${ tel }`

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        name = "";
        tel = "";
    })
    .catch((err) => {
        console.warn(err)
    })
    .finally(() => {
        myModal.show();
    })

});