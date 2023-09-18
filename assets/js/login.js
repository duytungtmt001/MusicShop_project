var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var registerBtn = $('.login__register-btn');
var registerTitle = $('.login__title-register');
var registerElement = $('.login__register');

var loginBtn = $('.login__signin-btn');
var loginTitle = $('.login__title-signin');
var loginElemnt = $('.login__signin')

var loginWithEmail = $('.login__form-header-with--email');
var loginWithPhone = $('.login__form-header-with--phone');
var loginTitlePhone = $('.login__form-header-phone');
var loginTitleEmail = $('.login__form-header-email');
var inputPhone = $('.input-phone');
var inputEmail = $('.input-email');

var loginForm = $('.login__form');
var loginMethodElements = $$('.login__method');
var loginByEmailPhone = $('.login-emailphone-btn');
var loginBackBtn = $('.login__back');
var loginForgot = $('.login__forgot');


// Khi click login bằng Email
loginWithEmail.onclick = function() {
    inputPhone.classList.add('display--none');
    inputEmail.classList.remove('display--none');
    this.classList.add('display--none');
    loginWithPhone.classList.remove('display--none');
    loginTitlePhone.classList.add('display--none');
    loginTitleEmail.classList.remove('display--none');
}


// Khi click login bằng SĐT
loginWithPhone.onclick = function() {
    inputPhone.classList.remove('display--none');
    inputEmail.classList.add('display--none');
    loginWithPhone.classList.add('display--none');
    loginWithEmail.classList.remove('display--none');
    loginTitlePhone.classList.remove('display--none');
    loginTitleEmail.classList.add('display--none');
}


// Khi click đăng nhập bằng SĐT/Email
loginByEmailPhone.onclick = function() {
    loginForm.classList.remove('display--none');
    loginMethodElements.forEach(function(e) {
        e.classList.add('display--none');
    })
    loginBackBtn.classList.remove('display--none');
    loginForgot.classList.remove('display--none');
}

// Khi click Quay lại
loginBackBtn.onclick = function() {
    loginForm.classList.add('display--none');
    loginMethodElements.forEach(function(e) {
        e.classList.remove('display--none');
    })
    loginBackBtn.classList.add('display--none');
    loginForgot.classList.add('display--none');
}



// Constructor Function
function Validator(options) {
    
    // function getParent(element, selector) {
    //     while(element.parentElement) {
    //         if(element.parentElement.matches(selector)) {
    //             return element.parentElement
    //         }
    //         element = element.parentElement
    //     }
    // }

    var selectorRules = {}

    // Hàm thực hiện Validate
    function validate(inputElement, rule) {
        var errorMessage;
        var errorElement = inputElement.closest(options.formGroupSelector).querySelector(options.errorSelector)

        var rules = selectorRules[rule.selector];

        for(var i = 0; i < rules.length; i++) {
            switch(inputElement.type) {
                case 'checkbox':
                case 'radio': 
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if(errorMessage) break;
        }

        if(errorMessage) {
            errorElement.innerText = errorMessage
            inputElement.closest(options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = ''
            inputElement.closest(options.formGroupSelector).classList.remove('invalid');
        }

        return !!errorMessage;
    }

    var formElement = document.querySelector(options.form)

    if(formElement) {
        // Bỏ hành vi mặc định của Sumbit form
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(rule => {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule)
                if(isValid) {
                    isFormValid = false;
                }
            });

            if(isFormValid) {
                // Trường hợp submit với JavaScript
                if(typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                    var formValues = Array.from(enableInputs).reduce(function(values, input) {
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector(`input[name="${input.name}"]:checked`).value;
                                break;
                            case 'checkbox':
                                if(!input.matches(':checked')) {
                                    return values
                                }
                                if(!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                } 

                                values[input.name].push(input.value)
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default: 
                                values[input.name] = input.value;
                        }
                        
                        return values
                    }, {})

                    options.onSubmit(formValues)
                }
                // Trường hợp submit với hành vi mặc định
                else{
                    formElement.submit();
                }
            } 
        }

        // Lặp qua mỗi rules và xử lý
        options.rules.forEach(rule => {

            // Lưu lại các Rules cho mỗi Input
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector)

            Array.from(inputElements).forEach(function(inputElement) {
                var errorElement = inputElement.closest(options.formGroupSelector).querySelector(options.errorSelector)
            
                if(inputElement) {

                    // Xử lý trường hợp Blur khỏi input
                    inputElement.onblur = function() {
                        validate(inputElement, rule, errorElement)
                    }

                    // Xử lý khi người dùng nhập vào input
                    inputElement.oninput = function() {
                        errorElement.innerText = ''
                        inputElement.closest(options.formGroupSelector).classList.remove('invalid');
                    }

                }
            })
        });
    }
}


// Định nghĩa các Rules
Validator.isRequired = function(selector, message) {
    return {
        selector,
        test(value) {
            return value ? undefined : message || "Vui lòng nhập trường này"
        }
    }
}

Validator.isPhone = function(selector, message) {
    return {
        selector,
        test(value) {
            var regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            return regexPhone.test(value) ? undefined : message || 'Số điện thoại không hợp lệ'
        }
    }
}

Validator.isEmail = function(selector, message) {
    return {
        selector,
        test(value) {
            var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regexEmail.test(value) ? undefined : message || 'Email không hợp lệ'
        }
    }
}

Validator.minLength = function(selector, min, message) {
    return {
        selector,
        test(value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự `
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector,
        test(value) {
            return value === getConfirmValue() ? undefined : message || "Giá trị nhập vào chưa chính xác"
        }
    }
}