function toast({
    title='',
    message='',
    type='info',
    duration = 3000
}) {
    const toastNode = $('#toast');
    if(toastNode) {
        const toast = document.createElement('div');
        const delay = duration/1000; 
        const autoRemoveToast = setTimeout(function() {
            toastNode.removeChild(toast);
        }, duration + 1000)  

        toast.onclick = function(e) {
            if(e.target.closest('.toast-right')) {
                clearTimeout(autoRemoveToast);
                toastNode.removeChild(toast);
            }
        }

        const icons = {
            info: "fa-solid fa-circle-info",
            error: "fa-solid fa-triangle-exclamation",
            warning: "fa-solid fa-circle-exclamation",
            success: "fa-solid fa-circle-check"
        }

        const icon = icons[type];
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInRight ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
            <div class="toast__left">
                <i class="${icon}"></i>
            </div>

            <div class="toast__body">
                <div class="toast__body-title">${title}</div>
                <div class="toast__body-des">${message}</div>
            </div>

            <div class="toast-right">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `

        toastNode.appendChild(toast);  
    }
}


function showToastSuccess() {
    toast({
        title: 'Thành công!',
        message: 'Sản phẩm đã được thêm thành công.',
        type: 'success',
        duration: 2000
    })
}

function showToastInfo() {
    toast({
        title: 'Thông báo!',
        message: 'Sản phẩm đã hết hàng.',
        type: 'info',
        duration: 2000
    })
}

function showToastWarning() {
    toast({
        title: 'Cảnh báo!',
        message: 'Sản phẩm đã có trong giỏ hàng.',
        type: 'warning',
        duration: 2000
    })
}

function showToastError() {
    toast({
        title: 'Thất bại!',
        message: 'Sản phẩm thêm không thành công.',
        type: 'error',
        duration: 2000
    })
}
