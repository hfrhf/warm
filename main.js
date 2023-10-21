    // الحصول على عنوان الصفحة الحالي
    var currentPage = window.location.href;

    // الحصول على جميع الروابط داخل النافبار
    var navLinks = document.querySelectorAll('.container ul li a');

    // فحص كل رابط داخل النافبار
    navLinks.forEach(function(link) {
        // إذا كان عنوان الرابط يحتوي على عنوان الصفحة الحالي
        if (currentPage.indexOf(link.getAttribute('href')) !== -1) {
            // إضافة الكلاس "active" إلى الرابط
            link.classList.add('active');
        }
    });

    const yesRadio = document.getElementById(`yes`);
    const noRadio = document.getElementById(`no`);
  
    // التأكد من عدم إمكانية اختيار الاثنين
    yesRadio.addEventListener('change', function() {
        if (yesRadio.checked) {
            noRadio.checked = false;
        }
    });
  
    noRadio.addEventListener('change', function() {
        if (noRadio.checked) {
            yesRadio.checked = false;
        }
    });



    for (let i = 1; i <= 7; i++) {
        const yesRadio = document.getElementById(`yes-${i}`);
        const noRadio = document.getElementById(`no-${i}`);
      
        // التأكد من عدم إمكانية اختيار الاثنين
        yesRadio.addEventListener('change', function() {
            if (yesRadio.checked) {
                noRadio.checked = false;
            }
        });
      
        noRadio.addEventListener('change', function() {
            if (noRadio.checked) {
                yesRadio.checked = false;
            }
        });
    }
    