document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // เพิ่ม class เพื่อเริ่มการเคลื่อนไหว
                const textToAnimate = document.querySelector('.move-text');
                textToAnimate.classList.add('move-text-active');

                // หลังจากเวลาที่กำหนดใน animation จบ ให้ลบ class ทิ้ง
                setTimeout(() => {
                    textToAnimate.classList.remove('move-text-active');
                }, 500); // 500 milliseconds ตรงกับความยาวของ animation 
            }
        });
        
    });
});
