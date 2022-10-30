window.addEventListener('load', () => {
    registerSW();
});

// Register the Service Worker
async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator
                .serviceWorker
                .register('serviceworker.js');
        }
        catch (e) {
            console.log('SW registration failed');
        }
    }
}

$(document).ready(() => {
    $('.filter-box-content input').change((e) => {
        if (e.target.checked) {
            // console.log($(e.currentTarget).parent().find('.icon'))
            $(e.currentTarget).parent().find('i').removeClass('fa-square').addClass('fa-square-check')
        } else {
            $(e.currentTarget).parent().find('i').removeClass('fa-square-check').addClass('fa-square')
        }

    })
})