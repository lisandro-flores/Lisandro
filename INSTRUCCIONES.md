# Portafolio de Lisandro Flores Ortega

Portafolio personal desarrollado con React + Vite + TypeScript.

## 🚀 Cómo ejecutar el proyecto

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   El proyecto estará disponible en `http://localhost:5173/`

## 📸 Agregar tu foto de perfil

**IMPORTANTE:** Para que tu foto de perfil se muestre correctamente, sigue estos pasos:

1. Coloca tu foto de perfil en la carpeta `public/` en la raíz del proyecto
2. Nombra el archivo como `foto-perfil.jpg` (puedes usar .jpg, .jpeg, o .png)
3. Si usas otro nombre o extensión, actualiza la referencia en `src/components/Inicio.tsx`:
   ```tsx
   <img src="/tu-nombre-de-archivo.jpg" alt="Foto de Lisandro Flores" className="inicio-foto" />
   ```

## 🏗️ Construir para producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 📦 Estructura del proyecto

```
miPagina/
├── public/
│   └── foto-perfil.jpg     👈 COLOCA TU FOTO AQUÍ
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Inicio.tsx
│   │   ├── SobreMi.tsx
│   │   ├── Skills.tsx
│   │   ├── Proyectos.tsx
│   │   ├── Formacion.tsx
│   │   ├── Contacto.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── style.css
└── index.html
```

## 🛠️ Tecnologías utilizadas

- React 19
- Vite
- TypeScript
- CSS3
- Font Awesome 6

## 📝 Personalización

Para personalizar el portafolio con tu información:

1. **Información personal, habilidades, proyectos y formación:** Edita `src/data/information.json`
2. **Contacto:** Edita `src/data/information.json` y conserva el correo usado por los enlaces `mailto:`
3. **Componentes y estructura:** Edita los archivos correspondientes en `src/components/`
4. **Estilos:** Edita `src/style.css`

## 📄 Licencia

© 2025 Lisandro Flores Ortega. Todos los derechos reservados.
