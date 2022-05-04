'use strict';
//create element
const body = document.body;
const divContainer = document.createElement ('div');
const divHeader = document.createElement ('div');
const divLogo = document.createElement ('div');
const tegAdivLogo = document.createElement ('a');
const tegImgdivLogo = document.createElement ('img');
const buttondivLogo = document.createElement ('div');
const tegAbuttondivLogo = document.createElement ('a');
const divContent = document.createElement ('div');
const divInfoContent = document.createElement ('div');
const tegH2divInfoContent = document.createElement ('h2');
const tegH4divInfoContent = document.createElement ('h4');
const divForms = document.createElement ('div');
const divFirstRowForms = document.createElement ('div');
const divFirstName = document.createElement ('div');
const inputFirstName = document.createElement ('input');
const divLastName = document.createElement ('div');
const inputLastName = document.createElement ('input');
const divSecomdRowForms = document.createElement ('div');
const divDisplayName = document.createElement ('div');
const inputDisplayName = document.createElement ('input');
const divEmail = document.createElement ('div');
const inputEmail = document.createElement ('input');
const divThirdRowForms = document.createElement ('div');
const divPassword = document.createElement ('div');
const inputPassword = document.createElement ('input');
const divPasswordConfirmmation = document.createElement ('div');
const inputPasswordConfirmmation = document.createElement ('input');
const divFourthRowForms = document.createElement ('div');
const divFieldContainerFourthRowForms= document.createElement ('div');
const labelFourthRowForms = document.createElement ('label');
const inputlabelFourthRowForm = document.createElement ('input');
const spandivFourthRowForms = document.createElement ('span');
const divFifthRowForms = document.createElement ('div');
const divFieldContainerFifthRowForms = document.createElement ('div');
const labelFifthRowForms = document.createElement ('label');
const inputlabelFifthRowForms = document.createElement ('input');
const spandivFifthRowForms = document.createElement ('span');
const divSixRowForms = document.createElement ('div');
const divFieldContainerSixRowForms = document.createElement ('div');
const inputSixRowForms = document.createElement ('input');
const labelSixRowForms = document.createElement ('label');
const divFooter = document.createElement ('div');
const buttonFooter = document.createElement ('button');
const errorMessageFirstRow = document.createElement ('span');
const errorMessageSecondRow = document.createElement ('span');
const errorMessageThirdRow = document.createElement ('span');
const formInputs = document.getElementsByClassName('example');

//create class element
divContainer.className = 'container';
divHeader.className = 'header-logo';
divLogo.className = 'logo';
buttondivLogo.className = 'login-button';
divContent.className = 'content';
divInfoContent.className = 'content-info';
divForms.className = 'content-forms';
divFirstRowForms.className = 'row';
divFirstName.className = 'field-container';
inputFirstName.className =  'example';
inputFirstName.classList.add('row-name');
divLastName.className = 'field-container';
inputLastName.className =  'example';
inputLastName.classList.add('row-name');
divSecomdRowForms.className = 'row';
divDisplayName.className = 'field-container';
inputDisplayName.className =  'example';
inputDisplayName.classList.add('row-nik');
divEmail.className = 'field-container';
inputEmail.className =  'example';
inputEmail.classList.add('row-nik');
divThirdRowForms.className = 'row';
divPassword.className = 'field-container';
inputPassword.className =  'example';
inputPassword.classList.add('row-password');
divPasswordConfirmmation.className = 'field-container';
inputPasswordConfirmmation.className =  'example';
inputPasswordConfirmmation.classList.add('row-password');
divFourthRowForms.className = 'row';
divFieldContainerFourthRowForms.className = 'fieldf-container';
labelFourthRowForms.className = 'join-label';
inputlabelFourthRowForm.className = 'example-join-as';
spandivFourthRowForms.className = 'text-join-as';
divFifthRowForms.className = 'row';
divFieldContainerFifthRowForms.className = 'fieldf-container';
labelFifthRowForms.className = 'join-label';
inputlabelFifthRowForms.className = 'example-join-as';
spandivFifthRowForms.className = 'text-join-as'
divSixRowForms.className = 'row';
divFieldContainerSixRowForms.className = 'fieldf-container';
inputSixRowForms.className = 'checkbox';
labelSixRowForms.className = 'checkbox-text';
divFooter.className = 'footer';
buttonFooter.className = 'button-footer';
errorMessageFirstRow.className = 'error-message';
errorMessageSecondRow.className = 'error-message';
errorMessageThirdRow.className = 'error-message';

//create id
divFourthRowForms.id = 'fourth-row';
divFifthRowForms.id = 'fifth-row';
divFieldContainerSixRowForms.id = 'six-row';
inputPassword.id = 'password';
inputPasswordConfirmmation.id = 'password-confirmmation';
inputEmail.id = 'email';

//create atribute
tegAdivLogo.setAttribute('href', 'https://www.squadhelp.com/');
tegImgdivLogo.setAttribute('src', '../public/assets/icons/logo.png');
tegAbuttondivLogo.setAttribute('href', 'https://www.squadhelp.com/login');
inputFirstName.setAttribute('placeholder', 'First name');
inputFirstName.setAttribute('name', 'first-name');
inputFirstName.setAttribute('required', '');
inputLastName.setAttribute('placeholder', 'Last name');
inputLastName.setAttribute('name', 'last-name');
inputLastName.setAttribute('required', '');
inputDisplayName.setAttribute('placeholder', 'Display Name');
inputDisplayName.setAttribute('name', 'display-name');
inputDisplayName.setAttribute('required', '');
inputEmail.setAttribute('placeholder', 'Email Address');
inputEmail.setAttribute('name', 'email');
inputEmail.setAttribute('required', '');
inputPassword.setAttribute('placeholder', 'Password');
inputPassword.setAttribute('type','Password');
inputPassword.setAttribute('name', 'password');
inputPassword.setAttribute('required', '');
inputPasswordConfirmmation.setAttribute('placeholder', 'Password Confirmmation');
inputPasswordConfirmmation.setAttribute('type','Password');
inputPasswordConfirmmation.setAttribute('name','password-confirmmation');
inputPasswordConfirmmation.setAttribute('required', '');
inputlabelFourthRowForm.setAttribute('type','radio');
inputlabelFourthRowForm.setAttribute('name','user_is');
inputlabelFourthRowForm.setAttribute('value','Buyer');
inputlabelFifthRowForms.setAttribute('type','radio');
inputlabelFifthRowForms.setAttribute('name','user_is');
inputlabelFifthRowForms.setAttribute('value','Creative');
inputSixRowForms.setAttribute('type','checkbox');
buttonFooter.setAttribute('type','button');

//update text contetnt
tegAbuttondivLogo.textContent = 'Login';
tegH2divInfoContent.textContent = 'CREATE AN ACCOUNT';
tegH4divInfoContent.textContent = 'We always keep your name and email address private.';
labelFourthRowForms.textContent = 'Join As a Buyer';
spandivFourthRowForms.textContent = 'I am looking for a Name, Logo or Tagline for my business, brand or product.';
labelFifthRowForms.textContent = 'Join As a Creative or Marketplace Seller';
spandivFifthRowForms.textContent = 'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.';
labelSixRowForms.textContent = 'Allow Squadhelp to send marketing/promotional offers from time to time';
buttonFooter.textContent = 'Create account';

//append element
body.appendChild(divContainer);
divContainer.appendChild(divHeader);
divHeader.appendChild(divLogo);
divLogo.appendChild(tegAdivLogo);
tegAdivLogo.appendChild(tegImgdivLogo);
divHeader.appendChild(buttondivLogo);
buttondivLogo.appendChild(tegAbuttondivLogo);
divContainer.appendChild(divContent);
divContent.appendChild(divInfoContent);
divInfoContent.appendChild(tegH2divInfoContent);
divInfoContent.appendChild(tegH4divInfoContent);
divInfoContent.appendChild(tegH4divInfoContent);
divContent.appendChild(divForms);
divForms.appendChild(divFirstRowForms);
divFirstRowForms.appendChild(divFirstName);
divFirstName.appendChild(inputFirstName);
divFirstRowForms.appendChild(divLastName);
divLastName.appendChild(inputLastName);
divForms.appendChild(divSecomdRowForms);
divSecomdRowForms.appendChild(divDisplayName);
divDisplayName.appendChild(inputDisplayName);
divSecomdRowForms.appendChild(divEmail);
divEmail.appendChild(inputEmail);
divForms.appendChild(divThirdRowForms);
divThirdRowForms.appendChild(divPassword);
divPassword.appendChild(inputPassword);
divThirdRowForms.appendChild(divPasswordConfirmmation);
divPasswordConfirmmation.appendChild(inputPasswordConfirmmation);
divForms.appendChild(divFourthRowForms);
divFourthRowForms.appendChild(divFieldContainerFourthRowForms);
divFieldContainerFourthRowForms.appendChild(labelFourthRowForms);
divFieldContainerFourthRowForms.appendChild(inputlabelFourthRowForm);
divFourthRowForms.appendChild(spandivFourthRowForms);
divForms.appendChild(divFifthRowForms);
divFifthRowForms.appendChild(divFieldContainerFifthRowForms);
divFieldContainerFifthRowForms.appendChild(labelFifthRowForms);
divFieldContainerFifthRowForms.appendChild(inputlabelFifthRowForms);
divFifthRowForms.appendChild(spandivFifthRowForms);
divForms.appendChild(divSixRowForms);
divSixRowForms.appendChild(divFieldContainerSixRowForms);
divFieldContainerSixRowForms.appendChild(inputSixRowForms);
divFieldContainerSixRowForms.appendChild(labelSixRowForms);
divContainer.appendChild(divFooter);
divFooter.appendChild(buttonFooter);

//validation form

const regexpPassword = /^\w{8,15}$/igu;
const regexpEmail = /^\w+\.?\w+@[a-z]{3,8}(\.[a-z]{2,5})$/iu;

function checkValidData (checkData) {
	if (checkData.name === 'email') {
		return regexpEmail.test(checkData.value);
	} if (checkData.name === 'password' || checkData.name === 'password-confirmmation') {
		return regexpPassword.test(formInputs['password'].value) 
			|| regexpPassword.test(formInputs['password-confirmmation'].value) 
			&& (formInputs['password'].value === formInputs['password-confirmmation'].value);
	}
	return true;
}

function ShowErrorMessage (target, messageRow, messageText) {
	const nextS = target.parentNode.parentNode.nextSibling;
	if (!target.value || !checkValidData(target)){
		messageRow.textContent = `${target.placeholder} ${messageText}`;
		target.classList.remove('input-valid');
		target.classList.add('input-error');
		divForms.insertBefore(messageRow, nextS)
	} else {
		target.classList.remove('input-error');
		target.classList.add('input-valid');
		messageRow.remove();
	}	
}

divForms.addEventListener('focusout', 
	(e) => {
		if(e.target.classList.contains('row-name')){
			ShowErrorMessage(e.target, errorMessageFirstRow, 'field cannot be empty');
		}
		if(e.target.classList.contains('row-nik')){
			if (e.target.name === 'email') {
				ShowErrorMessage(e.target, errorMessageSecondRow, 'please check the format');
			} else {
				ShowErrorMessage(e.target, errorMessageSecondRow, 'field cannot be empty');
			}
		}
		if(e.target.classList.contains('row-password')){
			ShowErrorMessage(e.target, errorMessageThirdRow, 'needs to match original password');
		}
	}
)

