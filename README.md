# Rick and Morty API Viewer

## Descripción

Esta aplicación web consume la API pública de **Rick and Morty** y permite explorar una lista de personajes con detalles básicos, así como filtrar y analizar la información de los personajes mediante gráficos. Los usuarios pueden ver detalles individuales de cada personaje, filtrar la lista por nombre, especie y estado, y generar gráficos para visualizar estadísticas sobre las especies y episodios.

## Características

- **Lista de personajes**: Obtén una lista de personajes de la serie con detalles como nombre, especie, estado, etc.
- **Filtro por nombre**: Filtra los personajes por nombre.
- **Filtros avanzados**: Filtra por estado (`alive`, `dead`, `unknown`) y especie (`human`, `alien`, etc.).
- **Gráficos**: Visualiza gráficos de barras o pastel que analizan la cantidad de personajes según una categoría (especie, episodio).
- **Detalles de personajes**: Accede a una página con información detallada de un personaje seleccionado.
- **Interfaz responsiva**: La aplicación está diseñada para ser utilizada tanto en dispositivos móviles como en escritorio.

## Tecnologías

- **Frontend**:
  - React.js con **TypeScript**
  - **Next.js** para el enrutamiento y renderizado del lado del servidor.
  - **Tailwind CSS** para el diseño responsivo y moderno.
  - **Shadcn/UI** (o Radix UI) para componentes de interfaz.
  - **Recharts** para gráficos.

- **Backend**:
  - **API pública de Rick and Morty**: https://rickandmortyapi.com/

## Instalación

### Prerrequisitos

Asegúrate de tener **Node.js** (v16 o superior) y **npm** o **yarn** instalados.

### Pasos para instalar

1. Clona el repositorio:

   ```
    https://github.com/javiezapata/rick-morty-app.git
   cd rick-and-morty-api-viewer
   ```
2. Instalar depedencias
   Dentro de la carpeta del proyecto, instala todas las dependencias necesarias con npm o yarn:
   ```
   npm install
   yarn install
   ```
3.  Ejecuta la aplicación en desarrollo:
   ```
   npm run dev
   yarn dev
   ```

## Uso
1. Página principal: En la página principal, puedes ver una lista de personajes de Rick and Morty. Puedes filtrar por nombre, especie y estado utilizando los controles disponibles.
2. Gráfico: La página también incluye un gráfico interactivo que muestra el número de personajes agrupados por una categoría, como especie o episodio.
3. Detalles de un personaje: Haz clic en cualquier personaje para ver detalles más completos sobre él, incluyendo su imagen, ubicación y episodio.
