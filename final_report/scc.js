         var images = document.getElementsByTagName('img');

        for (var i = 0; i < images.length; i++) {
            images[i].addEventListener('mouseenter', handleMouseOver);
            images[i].addEventListener('mouseleave', handleMouseOut);
        }

        function handleMouseOver() {
            this.style.filter = "grayscale(100%)";
        }

        function handleMouseOut() {
            this.style.filter = "grayscale(0%)";
        }