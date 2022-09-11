const mainImage = document.querySelector('img');
let userButton = document.querySelector('button');
let heading = document.querySelector('h1');

mainImage.onclick = () => 
{
    const imageSrc = mainImage.getAttribute('src');
    if (imageSrc === 'images/start-page-picture.png')
    {
        mainImage.setAttribute('src','images/Dog.png');
    } else
    {
        mainImage.setAttribute('src','images/start-page-picture.png');
    }
}
userButton.onclick = () =>
{
    setUserName();
}
if (!localStorage.getItem('name'))
{
    setUserName();
} else
{
    const storedName = localStorage.getItem('name');
    heading.textContent = `Welcome to the Undeertale wiki, ${storedName}`;
}
function setUserName() 
{
    const userName = prompt('Please enter your user name.');
    if (!userName)
    {
        setUserName();
    } else
    {
        localStorage.setItem('name',userName);
        heading.textContent = `Welcome to the Undertale wiki, ${userName}`;
    }
}