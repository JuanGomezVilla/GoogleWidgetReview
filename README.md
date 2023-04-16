# Google Widget Review
A widget written in HTML, CSS and Javascript to render Google business reviews, using a simple tag

# How to use?
Importa en cualquier parte del documento HTML el script:
```html
<script src="GoogleWidgetReview.js"></script>
```

Tras haber hecho esto, crea un contenedor y escribe dentro tantas etiquetas como valoraciones quieras mostrar:
```html
<div>
    <google-review
        name="Juan"
        star="star.png"
        points="5"
        avatar="https://www.w3schools.com/w3css/img_avatar3.png">
            Lorem ipsum
    </google-review>
</div>
```