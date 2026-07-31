function initUI() {
    const introBtn = document.getElementById('intro_btn');
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const info = document.querySelector('.info');
    const giftBtn = document.getElementById('gift_btn');
    const noGiftBtn = document.getElementById('no_gift_btn');
    const giftContainer = document.querySelector('.gift');

    function animateIntro() {
        if (box1) box1.classList.add('animation_box1');
        if (box2) box2.classList.add('animation_box2');
        if (introBtn) introBtn.style.display = 'none';
        if (info) info.style.display = 'flex';
        console.debug('Intro animation triggered');
    }

    if (introBtn) {
        
        introBtn.addEventListener('click', animateIntro);
        // make intro div accessible by keyboard
        introBtn.setAttribute('role', 'button');
        introBtn.tabIndex = 0;
        introBtn.addEventListener('keydown', function(e){
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); animateIntro(); }
        });
    }

    // attach debug hover/click logs to all interactive buttons and .btn elements
    const interactive = document.querySelectorAll('button, .btn');
    interactive.forEach(el => {
        el.addEventListener('mouseenter', () => console.debug('hover:', el.id || el.className));
        el.addEventListener('mouseleave', () => console.debug('leave:', el.id || el.className));
        el.addEventListener('click', () => console.debug('click:', el.id || el.className));
        // ensure .btn divs are keyboard focusable
        if (el.classList && el.classList.contains('btn')) {
            el.setAttribute('role', 'button');
            el.tabIndex = 0;
        }
    });

    if (giftBtn) {
        giftBtn.addEventListener('click', function() {
            if (giftContainer) giftContainer.classList.add('show');
            document.querySelectorAll('.btn_choice').forEach(ch => ch.style.display = 'none');
            console.debug('Gift button clicked - showing gift');
        });
    }

    if (noGiftBtn) {
        noGiftBtn.addEventListener('click', function() {
            noGiftBtn.style.display = 'none';
            if (giftBtn) giftBtn.style.width = '300px';
            console.debug('No-gift button clicked');
        });
    }

    console.debug('UI init complete');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUI);
} else {
    initUI();
}