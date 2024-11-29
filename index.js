//Cviceni 1 + 2 - E-mail, pozdravy + telo

const goodbye = jmeno => {
    return 'S pozdravem ' + jmeno;
}

const fillSubject = subject => {
    const subjectEl = document.querySelector('.email__subject');
    subjectEl.textContent = `${subject}`;
}

fillSubject('Motivační dopis');

const fillBody = (body, name) => {
    const bodyEl = document.querySelector('.email__body');
    bodyEl.innerHTML += body;
    const closingEl = document.querySelector('.email__closing');
    closingEl.textContent = goodbye(name);
}

fillBody('Dobrý den, blablabla', 'Barbora Krejčová');